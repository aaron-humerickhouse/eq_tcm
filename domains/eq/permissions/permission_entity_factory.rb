# frozen_string_literal: true

module Eq
  module Permissions
    # Eq::Permissions::PermissionEntityFactory
    class PermissionEntityFactory
      def build(hash)
        PermissionEntity.new(
          target_id: hash[:target_id],
          target_type: hash[:target_type],
          operation: hash[:operation]
        )
      end
    end
  end
end
