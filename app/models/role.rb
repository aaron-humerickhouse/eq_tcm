# frozen_string_literal: true

class Role < ApplicationRecord
  has_many :role_assignments
  has_many :operation_roles
  has_many :operations, through: :operation_roles
end
