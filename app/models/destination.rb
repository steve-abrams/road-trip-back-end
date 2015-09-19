class Destination < ActiveRecord::Base
  belongs_to :trip
  has_many :events, dependent: :destroy
end
