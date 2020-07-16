class APIService

  def fetch_cat_fact
    uri = URI("https://cat-fact.herokuapp.com/facts/random")

    response = Net::HTTP.get_response(uri)

    parsed_response = JSON.parse(response.body)
    parsed_response["text"]
  end

  def fetch_lyrics(artist, song)
    # parse our string into a uri
    uri = URI("https://api.lyrics.ovh/v1/#{artist}/#{song}")

    # use the uri to ping our api
    response = Net::HTTP.get_response(uri)

    code = response.code

    # make sure we get a 200 code and otherwise let them know there was an error
    if code == "200"
      # parse our JSON so that ruby can use it
      parsed_response = JSON.parse(response.body)
      parsed_response["lyrics"].colorize(:cyan)
    else
      "Error: the artist / song was not found!".colorize(:red)
    end

  end

end
