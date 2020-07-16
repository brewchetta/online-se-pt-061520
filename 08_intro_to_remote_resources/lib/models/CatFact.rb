class CatFact

  attr_reader :text, :username

  @@all = []

  def initialize(text:, user:)
    @text = text
    if user && user["name"]
      @username = "#{user["name"]["first"]} #{user["name"]["last"]}"
    else
      @username = "unknown"
    end

    @@all << self
  end

  def self.all
    @@all
  end

  # get a random cat fact
  def self.random_fact
    randfact = @@all.sample
    "#{randfact.text} - #{randfact.username}"
  end

end
