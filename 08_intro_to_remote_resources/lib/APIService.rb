class APIService

  def cat_fact_request
    response = RestClient.get("https://cat-fact.herokuapp.com/facts")
    puts "Got a response".colorize(:green)
    create_cat_facts(response)
  end

  def create_cat_facts(response)
    parsed_response = JSON.parse(response.body)
    parsed_response["all"].each do |cf|
      CatFact.new(text: cf["text"], user: cf["user"])
    end
  end

  def lyric_request(artist, song)
    begin
      response = RestClient.get "https://api.lyrics.ovh/v1/#{slugify(artist)}/#{slugify(song)}"
      parsed_response = JSON.parse(response)
      puts "Got a response".colorize(:green)
      parsed_response["lyrics"].split("\n").each do |line|
        puts line.colorize(:yellow)
        sleep(0.3)
      end
    rescue
      puts "Failed request for #{artist}/#{song}".colorize(:red)
    end
  end

  def slugify(phrase)
    phrase.split(" ").join("-")
  end

end
