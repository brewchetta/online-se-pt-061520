class Cat < ActiveRecord::Base
  belongs_to :location

  def to_human_years
    if self.age >= 2
      25 + (self.age - 2) * 4
    else
      self.age * 12.5
    end
  end
end
