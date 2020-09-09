# CRUD in Sinatra

Today we're going to be building CRUD in Sinatra. There is already

## Create

- New: `get /dogs/new` Create action that presents an HTML form to create an item in the database
- Create: `post /dogs` Create action that adds the completed item to the database

# Read

- Index: `get /dogs` Read action for all items in the database
- Show: `get /dogs/1` Read action for one item in the database

## Update

- Edit: `get /dogs/1/edit` Update action that presents an HTML form to edit an item in the database
- Update: `patch /dogs/1` Update action that updates the edited item in the database

## Delete/Destroy

- Destroy: `delete /dogs/1` Delete action that removes the item from the database
