class AddUserFieldsToUser < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :hometown, :string
    add_column :users, :favorite_place, :string
    add_column :users, :show_city, :boolean
  end
end
