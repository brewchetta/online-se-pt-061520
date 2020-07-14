# Ruby Class Inheritance

### SWBATs
- Understand how to build a has_many belongs_to relationship between two classes
- Map the relationship between classes in a domain
- Recognize where the single source of truth goes for object relationships
- Understand how to build a has_many through relationship
- Recognize common patterns with join classes

### Coding Exercise
Build out the following:
- A `CatLady` class with a name attribute
- A `Cat` class with a name attribute
- An instance of a `Cat` belongs to a `CatLady`
- An instance of `CatLady` has many instances of `Cat`
- `cat1.catlady` should return the instance of cat lady the cat belongs to
- `cat_lady1.cats` should return every instance of `Cat` that belongs to a cat lady

Starter code:

```
class Cat
  attr_accessor :name
  @@all = []

  def initialize(name:)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

end

class CatLady
  attr_accessor :name
  @@all = []

  def initialize(name:)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

end

Cat.new(name: "Garfield")
CatLady.new(name: "Josephine")
```
