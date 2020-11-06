# Layouts, Partials, and Helpers

To utilize a partial:

```
<%= render "form", title: "I am getting plugged as a variable into an <h1>!" %>
```

To utilize a layout first create that layout and tell your form to render with it with:

```
render :new, layout: "my_new_layout"
```

You can also utilize no layout with:

```
render :new, layout: false
```

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
