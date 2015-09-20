class TripsController < ApplicationController
  protect_from_forgery :except => [:update, :delete, :create]
  require 'net/http'
  require 'json'

  def index
    @trips = Trip.where(user_id: params[:user_id])
    respond_to do |format|
      format.html
      format.json {render json: @trips}
    end
  end

  def new
    @trip = Trip.new
  end

  def find_places
    url = URI.parse("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{params[:lat]},#{params[:lng]}&radius=#{params[:range]}&types=#{params[:category]}&key=#{ENV['GOOGLEAPI']}")
    req = Net::HTTP::Get.new(url.request_uri)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = (url.scheme == "https")
    response1 = http.request(req)
    res1 = JSON.parse(response1.body)
    render :json => {:data => res1}
  end

  def show_info
    url = URI.parse("https://maps.googleapis.com/maps/api/place/details/json?placeid=#{params[:place_id]}&key=#{ENV['GOOGLEAPI']}")
    req = Net::HTTP::Get.new(url.request_uri)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = (url.scheme == "https")
    response1 = http.request(req)
    res1 = JSON.parse(response1.body)
    render :json => {:data => res1}
  end

  def create
    start_location_city = params[:trip][:start_location_city]
    start_location_state = params[:trip][:start_location_state]

    end_location_city = params[:trip][:end_location_city]
    end_location_state = params[:trip][:end_location_state]


    url = URI.parse('https://maps.googleapis.com/maps/api/geocode/json?address='+start_location_city+',+'+start_location_state+'&key='+ENV['GOOGLEAPI'])
    req = Net::HTTP::Get.new(url.request_uri)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = (url.scheme == "https")
    response1 = http.request(req)
    res1 = JSON.parse(response1.body)

    url = URI.parse('https://maps.googleapis.com/maps/api/geocode/json?address='+end_location_city+',+'+end_location_state+'&key='+ENV['GOOGLEAPI'])
    req = Net::HTTP::Get.new(url.request_uri)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = (url.scheme == "https")
    response2 = http.request(req)
    res2 = JSON.parse(response2.body)

    @trip = Trip.new(trip_params)
    @trip.user_id = current_user.id
    @trip.start_location = start_location_city + ", " + start_location_state
    @trip.end_location = end_location_city + ", " +  end_location_state
    @trip.start_location_lat = res1["results"][0]["geometry"]["location"]["lat"]
    @trip.start_location_lng = res1["results"][0]["geometry"]["location"]["lng"]
    @trip.end_location_lat = res2["results"][0]["geometry"]["location"]["lat"]
    @trip.end_location_lng = res2["results"][0]["geometry"]["location"]["lng"]
    @trip.start_place_id = res1["results"][0]["place_id"]
    @trip.end_place_id = res2["results"][0]["place_id"]
    if @trip.save
      redirect_to user_trip_path(current_user.id, @trip.id)
    else
      redirect_to root_path
    end
  end

  def show
    @trip = Trip.includes(:posts, :destinations, :events).find(params[:id])
    @post = Post.new
    @event = Event.new
    @waypoints = @trip.destinations.map { |e| e.name }
    @time = @trip.posts.map { |e| {title: e.title, content: e.content, time: e.created_at.strftime('%A %B %y')}}
    respond_to do |format|
      format.html
      format.json {render json: @trip, include: [:posts, :destinations, :events]}
    end
  end




  def edit
    @trip = Trip.find(params[:id])
  end

  def update
    @trip = Trip.find(params[:id])
    if @trip.update(trip_params)
      redirect_to user_trip_path(@trip.user_id, @trip.id)
    else
      render :edit
    end
  end

  def destroy
    if Trip.find(params[:id]).destroy
      redirect_to root_path
    else
      render :show
    end
  end

  def trip_params
    params.require(:trip).permit(:name, :start_location, :end_location, :start_date, :end_date, :start_place_id, :end_place_id)
  end

end
