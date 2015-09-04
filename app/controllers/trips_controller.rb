class TripsController < ApplicationController
  protect_from_forgery :except => [:update, :delete, :create]

  def index
    @trips = Trip.all
    respond_to do |format|
      format.html
      format.json {render json: @trips}
    end
  end

  def new
    @trip = Trip.new
  end

  def create
    p '=============================================='
    p trip_params
    p '=============================================='
    respond_to do |format|
      format.html
      format.json {
        @trip = Trip.create(trip_params)
        render json: @trip
      }
    end
  end

  def show
    @trip = Trip.includes(:posts).find(params[:id])
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
      redirect_to trip_path(@trip.id)
    else
      render :edit
    end
  end

  def destroy
    if Trip.find(params[:id]).destroy
      redirect_to trips_path
    else
      render :show
    end
  end

  def trip_params
    params.require(:trip).permit(:name, :start_location, :end_location, :start_date, :end_date)
  end

end
