class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :guesses, :time_in_seconds, :user_id, :num_cards
end
