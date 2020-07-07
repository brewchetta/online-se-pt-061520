# Object Oriented Programming Part 1

### SWBATs
- Know how to use macros to define instance methods for an instance variable
- Know what an implied receiver is
- Know what a constant is
- Know how to create class variables and methods
- Know what self and object context are
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
