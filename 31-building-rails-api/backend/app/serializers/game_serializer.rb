class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :highscores

  def highscores
    ActiveModel::SerializableResource.new(object.highscores,  each_serializer: HighscoreSerializer)
  end
end
