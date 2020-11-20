class User < ApplicationRecord
  has_secure_password
  has_many :foster_homes, dependent: :destroy
  has_many :cats, through: :foster_homes

  validates_presence_of :name, :email
  validates_uniqueness_of :name, :email
end
