# Intro to Sinatra

Sinatra is a lightweight framework that provides models, views, and controllers. As a framework it allows us to build our very first fullstack application.

## Install Corneal

Moving forward we'll be utilizing numerous generators and templates. Corneal is one such template. You can find it at:

https://github.com/thebrianemory/corneal

Once the gem is installed, we can very quickly generate a Sinatra app in the terminal with `corneal new our-shiny-new-apps-name`. It also allows us to build models and controllers with simple generator commands.

*Please refrain from using scaffold until you've passed Mod 3*

## Shotgun

Once we've built a quick application using corneal, we can utilize `shotgun` which is a fancier version of `rackup`. Our `shotgun`'d server will reload the code between requests so we don't have to constantly refresh the server ourselves. To see it in action, we just need to go to `localhost:9393` in a browser. The `9393` is the port that it's currently running on. We can specify a different port like so: `shotgun -p 9200`. This would allow us to go to `localhost:9200`.

## Views

To view our project's HTML, we first need to create specific views. These utilize something called `erb` which stands for `embedded ruby`. Our `erb` is essentially just HTML that allows us to embed ruby inside of it that gets executed when we show the view. This allows us to create more dynamic views.

## Controllers

Our project also has controllers. Our controllers are similar to a delivery service. Our user tells the controller through a request that they would like to go to a route. The controller then performs whatever logic it needs to and delivers our erb file by rendering it.

If we want to, we can pass instance variables into the view through the controller.

Our `erb` tags (the `<%=  %>` and `<%  %>`) come in two different flavors. The anything in a `<%=` erb tag will be shown to the user. Without the `<%=`, the tag will not be shown in the HTML. The second is mainly helpful for ruby operations that we have to do inside the `erb`.

## Models

Models work exactly like they do with ActiveRecord (in fact they still *are* ActiveRecord). The only difference is that now we're displaying that data to a user interface. To create a model we can utilize `rake db:create_migration`. We can also create models using  `corneal model my_model_name first_attribute_name:data_type`. This will build both the migration and the model file for us.
