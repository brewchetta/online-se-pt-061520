class Constellation < ActiveRecord::Base
  has_many :stars, dependent: :destroy
end
