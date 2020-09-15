class Pizza < ActiveRecord::Base
  belongs_to :user
  validates :cheese, :topping, :sauce, presence: :true
end
