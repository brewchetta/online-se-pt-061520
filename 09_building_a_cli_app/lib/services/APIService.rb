class APIService

  def fetch_lyrics(artist, song)
    uri = URI("https://api.lyrics.ovh/v1/#{slugify(artist)}/#{slugify(song)}")

    response = Net::HTTP.get_response(uri)

    code = response.code

    if code == "200"
      parsed_response = JSON.parse(response.body)
      parsed_response["lyrics"].colorize(:cyan)
    else
      puts "Error: song or artist not found!".colorize(:red)
    end

  end

  def slugify(phrase)
    phrase.downcase.split(" ").join("-")
  end

end
