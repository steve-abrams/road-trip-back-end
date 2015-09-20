class AddFinishedStatusToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :finished, :boolean
  end
end
