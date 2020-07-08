class Methods

  def self.rainbow(string_arg)

    colors = [:red, :yellow, :green, :cyan, :blue, :magenta]
    new_string = ""
    i = 0

    while i < string_arg.length
      new_string << string_arg[i].colorize(colors[i % colors.length])
      i += 1
    end

    new_string

  end

end
