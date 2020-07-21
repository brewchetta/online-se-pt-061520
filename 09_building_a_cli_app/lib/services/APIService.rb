class APIService

  BASE_URI = "https://anapioficeandfire.com/api/characters"

  # fetch based on a character name
  def fetch_character_by_name(name)
    uri = URI(BASE_URI + "?name=#{name}")
    characters = make_request(uri)
    if characters[0]
      Character.new(characters[0])
    else
      "Couldn't find a character with that name..."
    end
  end

  # fetch all characters by page
  def fetch_character_page(page)
    uri = URI(BASE_URI + "?page=#{page}")
    characters = make_request(uri)
    characters.map do |character_data|
      Character.new(character_data)
    end
  end

  # secondary method to make and return the request
  def make_request(uri)
    response = Net::HTTP.get_response(uri)
    JSON.parse(response.body)
  end

end
