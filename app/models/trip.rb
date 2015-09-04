class Trip < ActiveRecord::Base
  belongs_to :user
  has_many :posts, dependent: :destroy

  # validates: :name, :start_date, :end_date, :start_location, :end_location, presence: true
end
