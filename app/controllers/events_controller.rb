class EventsController < ApplicationController

  def create
    @event = Event.new(event_params)
    @event.trip_id = params[:trip_id]
    @event.destination_id = params[:destination_id]
    if @event.save
      if @event.save
        redirect_to user_trip_path(current_user.id, params[:trip_id])
        flash[:notice] = "Activity Successfully Saved"
      end
    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :place_id, :destination_id, :trip_id, :category)
  end

end
