class User < ApplicationRecord

  validates :username, presence: true, uniqueness: true, length: { in: 5..30 }

  validates :email, presence: true, uniqueness: true, format: { with: /\S+@\S+\.\S+/, message: "must be a valid address" }

  validates :password, confirmation: true

  validates :password_confirmation, presence: true

end