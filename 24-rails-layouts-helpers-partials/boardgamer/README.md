# Layouts, Partials, and Helpers

## Partials

To utilize a partial:

```
<%= render "form", title: "I am getting plugged as a variable into an <h1>!" %>
```

You can also pull in partials from outside the current directory, for example if you had a universal partials folder:

```
<%= render "partials/errors", errors: @something.errors.full_messages %>
```

## Layouts

To utilize a layout first create that layout and tell your form to render with it with:

```
render :new, layout: "my_new_layout"
```

You can also utilize no layout with:

```
render :new, layout: false
```

You can also specify a layout for the entire controller by adding a line outside your actions:

```
FancyController < ApplicationController
  layout "fancy_controller_layout"
  
  def index
    # code goes here
  end

end
```

## Helpers

To utilize a helper method, first create it in the appropriate helpers file:

```
module UsersHelpers

  def current_user
    User.find_by_id(session[:user_id])
  end

end
```

 Technically the helpers are all available to any file, this is mainly for organization. You can access helpers normally in views, for example:

```
<h1>Welcome back <%= current_user.name %></h1>
```

Inside controllers, you can pull in helpers one of two ways:

```
class SomeController < ApplicationController
  include UsersHelpers

  def index
  if !current_user
    redirect_to some_path
  else
    render :index
  end

end
```

OR

```
class SomeController < ApplicationController

  def index
  if !helpers.current_user
    redirect_to some_path
  else
    render :index
  end

end
```

## Stylesheets

There's an easy way to include a specific css file and a hard way to include a css file.

For an easy way to include a single file is to create a new .css file in stylesheets which you can then link to directly in the stylesheet_link_tag. The big issue here is you'll have to use a single file for each layout since if you utilize application.css it'll pull in all the files at the same time. Additionally, you'll have to tweak the rails configuration if you'd like anything other than a .css file, for example if you wanted to use sass.

A second option is that you can change the application.css manifest file to only include specific files and probably rename it so it's specific to boardgames. An example of our newly renamed boardgame_styles.csswould be:

```
/*
 *= require boardgames
 */
```

This would draw in boardgames.scss . This is great because we can just add additional lines to require more stylesheets if we want to.

You could then build an additional manifest called category_styles.css and inside of it write out:

```
/*
 *= require categories
 */
```

Inside the layouts you'd replace the stylesheet_link_tags like so:

boardgames.html.erb:
```
<%= stylesheet_link_tag 'boardgame_styles', media: 'all', 'data-turbolinks-track': 'reload' %>
```

categories.html.erb:
```
<%= stylesheet_link_tag 'category_styles', media: 'all', 'data-turbolinks-track': 'reload' %>
```

For additional information, check out this resource on the asset pipeline (worth a read even if you're not interested in styling): https://guides.rubyonrails.org/asset_pipeline.html
