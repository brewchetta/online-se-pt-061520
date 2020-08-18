class Hero

  attr_reader :id
  attr_accessor :name, :secret_identity

  def initialize(id: nil, name:, secret_identity:)
    @id = id
    @name = name
    @secret_identity = secret_identity
  end

  # --- CREATE --- #

  # Hero.create

  def self.create(name:, secret_identity:)
    new_hero = self.new(name: name, secret_identity: secret_identity)
    new_hero.save
  end

  # --- READ --- #

  # Hero.all

  def self.all
    sql_query = "SELECT * FROM heroes;"

    result = DB.execute(sql_query)

    result.map do |hero|
      Hero.new(id: hero[0], name: hero[1], secret_identity: hero[2])
    end
  end

  # Hero.find_by_name("Batman")

  def self.find_by_name(name)
    sql_query = <<-SQL
    SELECT * FROM heroes
    WHERE name = ?
    SQL

    hero = DB.execute(sql_query, name).flatten
    Hero.new(id: hero[0], name: hero[1], secret_identity: hero[2])
  end

  # --- UPDATE --- #

  # batman.save

  def save
    if self.id
      # if it has an id, it's in the database and we update it
      sql_query = <<-SQL
      UPDATE heroes
      SET name = ?, secret_identity = ?
      WHERE id = ?
      SQL

      DB.execute(sql_query, self.name, self.secret_identity, self.id)
    else
      # if it doesn't have an id, it's not in the database and we create it
      sql_query = <<-SQL
      INSERT INTO heroes (name, secret_identity)
      VALUES (?,?)
      SQL

      DB.execute(sql_query, self.name, self.secret_identity)
      @id = DB.execute("SELECT last_insert_rowid() FROM heroes")[0][0]
    end
  end
  # --- DELETE --- #

  # batman.destroy

  def destroy

    sql_query = <<-DESTROY
    DELETE FROM heroes
    WHERE id = ?
    DESTROY

    DB.execute(sql_query, self.id)
  end

end
