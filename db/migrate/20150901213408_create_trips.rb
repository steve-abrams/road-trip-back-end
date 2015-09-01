class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :name
      t.string :start_location
      t.string :end_location
      t.date :start_date
      t.date :end_date
      t.timestamps
    end
  end
end
