class AddTotalMilesToUsers < ActiveRecord::Migration
  def change
    add_column :users, :total_miles, :integer
  end
end
