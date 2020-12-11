# Method

def some_method(arg)
  puts arg
end

def implicit_return_method
  # last line gets returned
  return "I will be implicitly returned"
end

# Procs / Lambdas
some_proc = Proc.new do
  "I am a proc"
end
