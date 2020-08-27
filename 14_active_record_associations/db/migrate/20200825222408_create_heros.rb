class CreateHeros < ActiveRecord::Migration[6.0]
  def change
    create_table :heros do |table|
      table.string :name
      table.string :secret_identity
    end
  end
end

# @name = name
# @secret_identity = secret_identity
