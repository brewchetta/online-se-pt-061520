class Song

  attr_reader :name, :artist, :lyrics

  @@all = []

  def initialize(name:, artist:, lyrics:)
    @name = name
    @artist = artist
    @lyrics = lyrics

    @@all << self
  end

  def self.all
    @@all
  end

end
