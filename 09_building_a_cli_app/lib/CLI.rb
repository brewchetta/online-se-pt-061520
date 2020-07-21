class CLI

  def run
    system("clear")
    @user_input = nil
    @api = APIService.new
    @page = 1
    welcome

    until @user_input == "2"
      main_menu
    end

    puts "Goodbye!"
  end

  def welcome
    puts "---Welcome to THE Ice And Fire Character Repository---".colorize(:red)
    "\n"
  end

  def main_menu
    puts "What would you like to do?"
    puts "1. Search for a character"
    puts "2. Get character list"
    puts "3. Exit"

    @user_input = gets.chomp

    if @user_input == "1"
      search_for_character
    elsif @user_input == "2"
      get_character_page
    elsif @user_input == "3"
      exit
    else
      puts "Invalid input".colorize(:red)
    end
  end

  def search_for_character
    print "What character would you like to search for? "
    input = gets.chomp
    character = @api.fetch_character_by_name(input)
    character.pretty_print
  end

  def get_character_page
    characters = @api.fetch_character_page(@page)
    characters.each {|c| c.pretty_print}
  end

end
