class AddPlaceIdToDestinations < ActiveRecord::Migration
  def change
    add_column :destinations, :place_id, :string
  end
end
