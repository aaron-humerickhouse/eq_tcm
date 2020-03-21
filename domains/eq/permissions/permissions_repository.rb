# frozen_string_literal: true

module Eq
  module Permissions
    # Eq::Permissions::PermissionsRepository
    class PermissionsRepository < RepositoryBase
      include Dry::Monads[:result]

      ##
      # Load permissions by user id
      # @param user_id [integer]
      #
      # @return [Eq::Permissions::PermissionsEntity]
      def load_by_user_id(user_id)
        sql = "SELECT role_assignments.target_id, role_assignments.target_type, operations.slug
               FROM role_assignments
               JOIN operation_roles on operation_roles.role_id = role_assignments.role_id
               JOIN operations on operations.id = operation_roles.operation_id
               WHERE role_assignments.user_id = #{user_id};".remove("\n")
        results = ActiveRecord::Base.connection.execute(sql)

        permissions = results.map { |result| map_record(result) }

        Success(permissions)
      rescue StandardError => e
        logger.error e
        logger.error e.backtrace
        Failure('Failed to load permissions by user id')
      end

      private

      def orm_adapter
        ::RoleAssignment
      end

      def map_record(record)
        Eq::Permissions::PermissionEntity.new(
          target_id: record['target_id'],
          target_type: record['target_type'],
          operation: record['slug']
        )
      end

      def entity_factory
        @entity_factory ||= EqTcm::Container['eq.permissions.permission_entity']
      end
    end
  end
end
