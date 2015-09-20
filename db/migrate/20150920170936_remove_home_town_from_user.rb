class RemoveHomeTownFromUser < ActiveRecord::Migration
  def change
    add_column :users, :hometown_city, :string
    add_column :users, :hometown_state, :string
    remove_column :users, :hometown, :string
  end
end
