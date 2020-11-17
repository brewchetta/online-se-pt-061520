class User < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :boardgames, through: :reviews

  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true
end
