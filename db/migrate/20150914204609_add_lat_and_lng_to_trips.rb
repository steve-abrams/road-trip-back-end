class AddLatAndLngToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :start_location_lat, :float
    add_column :trips, :start_location_lng, :float
    add_column :trips, :end_location_lat, :float
    add_column :trips, :end_location_lng, :float
  end
end
