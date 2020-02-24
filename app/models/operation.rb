# frozen_string_literal: true

class Operation < ApplicationRecord
  has_many :roles, through: OperationRole
  has_many :operation_roles
end
