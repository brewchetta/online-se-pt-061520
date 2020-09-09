# REST, MVC, and Sinatra Forms

So many things in one live discussion! Let's get started.

## HTTP

- Sends and receives data. This can be between browsers, servers, or any other service on the internet.
- HTTP must be stateless. Stateless means that it doesn't retain any information between requests.

## RESTful Routes

- There are seven RESTful routes. These are a convention created to standardize paths for application resources (for example, a website that uses a database)
- Index: `get /dogs` Read action for all items in the database
- Show: `get /dogs/1` Read action for one item in the database
- New: `get /dogs/new` Create action that presents an HTML form to create an item in the database
- Create: `post /dogs` Create action that adds the completed item to the database
- Edit: `get /dogs/1/edit` Update action that presents an HTML form to edit an item in the database
- Update: `patch /dogs/1` Update action that updates the edited item in the database
- Destroy: `delete /dogs/1` Delete action that removes the item from the database
