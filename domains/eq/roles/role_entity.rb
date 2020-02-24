# frozen_string_literal: true

module Eq
  module Roles
    # Eq::Roles::RoleEntity
    class RoleEntity < EntityBase
      attribute :id, Types::Integer.optional
      attribute :name, Types::Strict::String
      attribute :description, Types::Strict::String
      attribute :created_at, Types::Time.optional
      attribute :updated_at, Types::Time.optional
    end
  end
end
