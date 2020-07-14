module Color

  @colors = [:red, :yellow, :green, :cyan, :blue, :magenta]

  def self.Rainbow(string_arg)
    new_string = ""
    i = 0

    while i < string_arg.length
      new_string << string_arg[i].colorize(@colors[i % @colors.length])
      i += 1
    end

    new_string
  end # rainbow

  def self.RainbowClear(string_arg)
    puts self.Rainbow(string_arg)
    sleep(1.5)
    system("clear")
  end # rainbow clear

end
