class TripsController < ApplicationController
  protect_from_forgery :except => [:update, :delete, :create]

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
    @trip = Trip.new(trip_params)
    @trip.user_id = current_user.id
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
