# Object Oriented Programming Part 2

### SWBATs
- Know how to use macros to create instance methods
- Know what a constant is
- Know what a symbol is and how it's used
- Know how to create class variables and methods
- Know what self and object context are
- Know what an implied receiver is
- Know what the .send method does in relation to self
- Know the difference between calling instance and class methods
- Know the difference in scope between a class and instance variable

### Notes

Macro: In Ruby, a class method that produces new instance methods

Fun facts:
- the `@` or `$` sign in front of a variable (ex. `@name`, `$my_global_var`) are called "sigils"
- you're using a context even at the top level, in Ruby that context is the `main` object
- there are four types of variables in ruby defined by scope: local, global, class, & instance
- there is an acronym `MINSWAN` that stands for "Matz Is Nice So We Are Nice", this doesn't relate to anything, I just thought it was cute

### Coding Exercise

Build a `Pet` class that fulfills these deliverables:
- each instance should start with a `name` and `species`
- you should be able to a pet instance's `name`
- you should not be able to change a pet instance's `species`
- the Pet class has the `all` class variable that tracks every instance of Pet - it starts as an empty array
- every Pet instance gets added to the `all` class array when they're created
- Pet has a `.all` method which returns an array of every Pet instance
- Pet has a `.find_by_name` method which returns the first *instance* of a pet with a matching name
