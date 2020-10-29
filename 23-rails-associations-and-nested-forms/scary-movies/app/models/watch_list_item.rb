class WatchListItem < ApplicationRecord
  belongs_to :user
  belongs_to :scary_movie
end
