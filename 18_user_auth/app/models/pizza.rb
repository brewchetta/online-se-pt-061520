class Pizza < ActiveRecord::Base
  validates :cheese, :topping, :sauce, presence: :true
end
