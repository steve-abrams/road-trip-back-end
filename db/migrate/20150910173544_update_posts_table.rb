class UpdatePostsTable < ActiveRecord::Migration
  def change
    rename_column :posts, :name, :title
    rename_column :posts, :description, :content
    add_column :posts, :latitude, :float
    add_column :posts, :longitude, :float
  end
end
