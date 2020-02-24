# frozen_string_literal: true

module Eq
  module Permissions
    # Eq::Permissions::PermissionEntityFactory
    class PermissionEntityFactory
      def build(hash)
        PermissionEntity.new(
          target: hash[:target],
          operations: hash[:operations]
        )
      end
    end
  end
end
