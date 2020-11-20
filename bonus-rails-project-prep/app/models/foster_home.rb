class FosterHome < ApplicationRecord
  belongs_to :cat
  belongs_to :user

  validates :family_name, uniqueness: { scope: :cat_id,
    message: "can only foster this cat once" }

  validates :status, inclusion: { in: ['current', 'previous'],
    message: "%{value} is not a valid status" }

  scope :get_current, -> { where('status = ?', 'current') }
end
