class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :name
      t.date :date
      t.string :description
      t.timestamps
    end
  end
end
