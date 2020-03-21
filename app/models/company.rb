# frozen_string_literal: true

class Company < ApplicationRecord
  has_many :role_assignments, as: :target
  has_many :projects
end
