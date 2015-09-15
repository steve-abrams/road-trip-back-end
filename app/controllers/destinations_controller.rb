class DestinationsController < ApplicationController

  def create
    @destination = Destination.new(destination_params)
    @destination.trip_id = params[:trip_id]
    if @destination.save
      redirect_to user_trip_path(current_user.id, params[:trip_id])
      flash[:notice] = "Destination Successfully Saved"
    else
      flash[:notice] = "Destination could not be saved"
    end
  end

  private

  def destination_params
    params.require(:destination).permit(:name, :trip_id)
  end

end
