class AddLocationToDestinations < ActiveRecord::Migration
  def change
    add_column :destinations, :lat, :float
    add_column :destinations, :lng, :float
  end
end
