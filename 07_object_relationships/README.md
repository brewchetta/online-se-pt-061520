# Ruby Class Inheritance

### SWBATs
- Know that the acronym DRY stands for DONT REPEAT YOURSELF and understand how that applies to code
- Understand how to architect their files with a run file and an environment file
- Understand how to view the ancestors chain for a class
- Know how to make a class inherit from a parent class
- Know how to overwrite a parent class's methods
- Recognize and utilize the `super` keyword
- Understand what a module is and how to integrate it into a class with `include` and `extend`

### Notes
- Inheritance is super common and we'll come across it later with javascript as well!

### Coding Exercise
Build out the following:
- A `Cat` class that will act as the parent for two other classes
- `Cat` has a `name`
- `Cat` has a method `#purr` which prints `"Prrrrrrr"`
- A module called `Roar` which has a method called `#roar` that prints `"RAAAAAR"`
- A `Tiger` and a `Lion` class which both inherit from `Cat`
- `Tiger` has `number_of_stripes` which should be an integer
- `Lion` has `in_pride` which should be a boolean
- `Tiger` and `Lion` instances inherit the `#roar` method from `Roar`
