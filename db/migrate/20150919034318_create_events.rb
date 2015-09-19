class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :place_id
      t.string :name
      t.integer :destination_id
      t.integer :trip_id
    end
  end
end
