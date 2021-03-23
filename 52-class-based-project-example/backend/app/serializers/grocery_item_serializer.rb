class GroceryItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :quantity
end
