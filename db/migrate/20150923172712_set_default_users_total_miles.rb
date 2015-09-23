class SetDefaultUsersTotalMiles < ActiveRecord::Migration
  def change
    change_column :users, :total_miles, :integer, :default => 0
  end
end
