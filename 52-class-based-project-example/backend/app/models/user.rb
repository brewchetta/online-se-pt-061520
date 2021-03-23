class User < ApplicationRecord
  has_secure_password
  has_many :grocery_items, dependent: :destroy
end
