# Countdown to Midnight

## Objectives

1. Practice building a `while` loop
2. Practice using the subtract-and-assign operator (`-=`)—the inverse of the add-and-assign operator (`+=`). 

## Review 

#### On `while` Loops

This lab is going to test your skills in writing `while` loops. Remember, a `while` loop will execute your block of code only *while* your defined conditional evaluates as `true`. 

For example, this script:

```ruby
x = 1
while x < 10
  puts "#{x} is less than 10"
  x += 1
end
```
Will print this:

```
1 is less than 10
2 is less than 10
3 is less than 10
4 is less than 10
5 is less than 10
6 is less than 10
7 is less than 10
8 is less than 10
9 is less than 10
```
And return `nil`.

#### String Interpolation

Using the `#{}` is called interpolation. In this case, it's going to actually print out the value of `x`. If we just wrote `puts "x is less than 10"` it would print out the letter 'x' instead of the number `x` is representing.

#### The Add-And-Assign Operator (`+=`)

This is a shorthand useful for incrementing, or "stepping up", values. It's an operator that adds the submitting value to the value of `x`. In the example above `x` begins with a value of `1`, and is incremented by `1` each time the `while` loop runs. The line `x += 1` is the same as the line `x = x + 1`. 

The loop is going to stop executing as soon as `x` hits `10`, since that was the condition that we set.

#### The Subtract-And-Assign Operator (`-=`)

We can also use the subtract-and-assign operator (`-=`) which instead *subtracts* the submitted value from the given variable and reassigns that variable to the resulting difference.

## Instructions

1. Fork and clone this lab. 
2. Open it in your IDE and run the test suite. You'll be coding your solution in `countdown.rb`
3. Write a method that takes in an integer argument and uses a while loop to countdown from that integer to `0`, outputting `"#{number} SECOND(S)!"` in each iteration of the loop. The method should return `"HAPPY NEW YEAR!"` after the loop finishes. **Hint:** *In Ruby, a method will return the very last line of code that it executes.*
4. Our Ruby program executes so quickly that it doesn't actually count down at the speed of one second per number. See if you can make the loop pause for one second each trip around ([hint](http://stackoverflow.com/questions/1329967/tell-ruby-program-to-wait-some-amount-of-time)). Write this in a new method called `countdown_with_sleep` that also takes one integer argument for the countdown.
<p data-visibility='hidden'>View <a href='https://learn.co/lessons/countdown-to-midnight' title='Countdown to Midnight'>Countdown to Midnight</a> on Learn.co and start learning to code for free.</p>
