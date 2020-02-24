# frozen_string_literal: true

class RoleAssignment < ApplicationRecord
  belongs_to :user
  belongs_to :target, polymorphic: true
  belongs_to :role
  belongs_to :assigner, class_name: 'User'
end
