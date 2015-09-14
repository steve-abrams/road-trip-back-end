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


  # def create
  #   @post = Post.new(post_params)
  #   @post.trip_id = params[:trip_id]
  #   if @post.save
  #     redirect_to trip_path(params[:trip_id])
  #     flash[:notice] = "Post Successfully Saved"
  #   else
  #     flash[:notice] = "Post could not be saved"
  #   end
  # end

  def create
    start_location = params[:trip][:start_location]
    end_location = params[:trip][:end_location]

    start_location_city = start_location.split(',')[0]
    start_location_state = start_location.split(',')[1]

    end_location_city = end_location.split(',')[0]
    end_location_state = end_location.split(',')[1]


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
    @trip.start_location_lat = res1["results"][0]["geometry"]["location"]["lat"]
    @trip.start_location_lng = res1["results"][0]["geometry"]["location"]["lng"]
    @trip.end_location_lat = res2["results"][0]["geometry"]["location"]["lat"]
    @trip.end_location_lng = res2["results"][0]["geometry"]["location"]["lng"]
    if @trip.save
      redirect_to user_trip_path(current_user.id, @trip.id)
    else
      redirect_to root_path
    end
  end
  # def create
  #   p '=============================================='
  #   p trip_params
  #   p '=============================================='
  #   respond_to do |format|
  #     format.html
  #     format.json {
  #       @trip = Trip.create(trip_params)
  #       render json: @trip
  #     }
  #   end
  # end

  def show
    p "*"*80
    p params
    @trip = Trip.includes(:posts).find(params[:id])
    p @trip
    @post = Post.new
    respond_to do |format|
      format.html 
      format.json {render json: @trip, include: :posts}
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
      redirect_to user_trips_path(current_user.id)
    else
      render :show
    end
  end

  def trip_params
    params.require(:trip).permit(:name, :start_location, :end_location, :start_date, :end_date)
  end

end
