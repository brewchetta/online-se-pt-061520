class Cat < ApplicationRecord
  has_many :foster_homes, dependent: :destroy
  has_many :users, through: :foster_homes
end
