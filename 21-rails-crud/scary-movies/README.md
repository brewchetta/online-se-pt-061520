# Rails CRUD

## link_to and button_to

```
<%= link_to "Murder movie", scary_movie_path(@scary_movie), method: :delete %>

<%= button_to "Murder movie", scary_movie_path(@scary_movie), method: :delete %>
```

## The Three Types of Form Helpers:

```
<%= form_tag scary_movies_path do %>
  <%= label_tag "Title" %>
  <%= text_field_tag "scary_movies[title]" %>
  <%= label_tag "Scariness Rating" %>
  <%= number_field_tag "scary_movies[scariness_rating]" %>
  <%= submit_tag "Add Your Movie" %>
<% end %>

<%= form_for @scary_movie do |f| %>
  <%= f.label "Title" %>
  <%= f.text_field :title %>
  <%= f.label "Scariness Rating" %>
  <%= f.number_field :scariness_rating %>
  <%= f.submit "Add your movie" %>
<% end %>

<%= form_with model: @scary_movie do |form| %>
<%= form.label "Title" %>
<%= form.text_field :title %>
<%= form.label "Scariness Rating" %>
<%= form.number_field :scariness_rating %>
<%= form.submit "Add Your Movie" %>
<% end %>
```
