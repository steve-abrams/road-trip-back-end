class AddPlaceIdsToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :start_place_id, :string
    add_column :trips, :end_place_id, :string
  end
end
