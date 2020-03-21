# frozen_string_literal: true

module Eq
  module Permissions
    # Eq::Permissions::PermissionEntity
    class PermissionEntity < EntityBase
      attribute :target_id, Types::Strict::Integer
      attribute :target_type, Types::Strict::String
      attribute :operation, Types::Strict::String
    end
  end
end
