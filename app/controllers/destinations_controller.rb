class DestinationsController < ApplicationController

  def create
    @destination = Destination.new(destination_params)
    @destination.trip_id = params[:trip_id]
    location_city = params[:destination][:name].split(',')[0]
    location_state = params[:destination][:name].split(',')[1]

    url = URI.parse('https://maps.googleapis.com/maps/api/geocode/json?address='+location_city+',+'+location_state+'&key='+ENV['GOOGLEAPI'])
    req = Net::HTTP::Get.new(url.request_uri)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = (url.scheme == "https")
    response1 = http.request(req)
    res1 = JSON.parse(response1.body)

    @destination.place_id = res1["results"][0]["place_id"]

    if @destination.save
      redirect_to user_trip_path(current_user.id, params[:trip_id])
      flash[:notice] = "Destination Successfully Saved"
    else
      flash[:notice] = "Destination could not be saved"
    end
  end

  private

  def destination_params
    params.require(:destination).permit(:name, :trip_id, :place_id)
  end

end
