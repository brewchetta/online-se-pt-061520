class User < ApplicationRecord
  has_secure_password

  validates :username, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :email, format: { with: /\S+@\S+\.\S+/,
    message: "must be in proper email format" }
  validates :username, length: { in: 5..20 }
  validates :password, confirmation: true
  validates :password_confirmation, presence: true

  validate :no_coders_allowed

  def no_coders_allowed
    if username.include?("coder")
      errors.add(:username, "cannot include the word coder")
    end
  end

end
