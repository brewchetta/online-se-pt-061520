# Rails Validations

## What Are Validations?

Validations happen whenever we call `.create`, `.update`, or `.save` (this includes variants like `.create!`)

If an instance of a model doesn't pass its validations, that instance isn't persisted in the database and errors get added to it. If we have a `@scary_movie` that doesn't pass its validations for a scariness_rating, we can call `@scary_movie.errors.full_messages` to see an array of messages informing us why those validations failed.

This is most useful for displaying information to the user through things like flash messages or error partials (we'll get to those in a later discussion).

## Building Basic Validations

In order to build basic validations, we just need syntax similar to this in a model:

```
validates :name, presence: :true
validates :name, uniqueness: :true
```

There are a wide variety of validations and for a more comprehensive list, check out the documentation on the [Rails ActiveRecord website](https://guides.rubyonrails.org/active_record_validations.html)

## More Advanced Validations

There are a few advanced validations we can utilize.

### Confirmation

If we want to confirm something, for example include a confirmation when someone's putting in a password, we can use the confirmation validator:

```
class User < ApplicationRecord
  validates :password, confirmation: true
end
```

```
<%= text_field :person, :password %>
<%= text_field :person, :password_confirmation %>
```

This would make sure that the password and password confirmation are both the same when it validates them.

### Format

There's a way to make sure our inputs are formatted in a specific way. For example, if we wanted to make sure someone had a properly formatted email we could validate it this way:

```
class user < ApplicationRecord
  validates :email, format: { with: /\S+@\S+\.\S+/, message: "must be a valid email, for example 'chett@chett.net'" }
end
```

We can change the message to be whatever we want, the `with:` most often refers to regex.

### Length

We can validate the length of certain things, for example enforcing a password length:

```
class User < ApplicationRecord
  validates :username, length: { minimum: 5, maximum: 20 }
end
```

This would enforce a length for usernames where the minimum is 5 characters and the maximum is 20. We can also utilize a range: `length: { in: 5..20 }`

## Custom Validations

We can build our own custom validations as well! There are multiple ways to do this and the Rails site has examples of custom validations. That being said, we can build them directly into a model:

```
class User < ApplicationRecord
  validate :username_must_be_chett

  def username_must_be_chett
    if !username == "chett"
      errors.add(:username, "This username must be chett!")
    end
  end
end
```

You can find more information about this pattern in the [Rails ActiveRecord Validations: Custom Methods Section](https://guides.rubyonrails.org/active_record_validations.html#custom-methods)

## Displaying Errors

There are several ways to display errors, the easiest being through flash messages. If something fails its validation, we can add its errors to an array like so:

`flash[:errors] = @user.errors.full_messages`

Then in the layout or on the page we display those error messages:

```
<div>
  <% flash[:errors]&.each do |error| %>
    <p><%= error %></p>
  <% end %>
</div>
```

We can add additional classes / ids and styling so that our div displays in a pretty format.

*BONUS: What is the `&` doing at the end of `flash[:errors]`? Check out this [stack overflow](https://stackoverflow.com/questions/36812647/what-does-ampersand-dot-mean-in-ruby) for the answer!*
