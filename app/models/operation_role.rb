class OperationRole < ApplicationRecord
  belongs_to :operation
  belongs_to :role
end
