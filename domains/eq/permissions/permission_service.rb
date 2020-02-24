module Eq
  module Permissions
    class PermissionService
      include Dry::Monads[:result, :do]

      def initialize; end

      def user_permissions(user_id)
        user = yield user_repository.load(user_id)

        user_service = user_service_factory.build(user)
        role_assignments = yield user_service.role_assignments

        permissions = role_assignments.map do |role_assignment|
          operations = yield role_repository.operations(role_assignment.role)
          operations.map do |operation|
            operation.name.parameterize
          end
          permission_entity_factory.build(
            target: role_assignment.target,
            operations: operations
          )
        end

        Success(permissions)
      end

      private

      def user_repository
        @user_repository ||= EqTcm::Container['eq.users.user_repository']
      end

      def user_service_factory
        @user_service_factory ||= EqTcm::Container['eq.users.user_service_factory']
      end

      def permission_entity_factory
        @permission_entity_factory ||= EqTcm::Container['eq.permissions.permission_entity_factory']
      end

      def role_repository
        @role_repository ||= EqTcm::Container['eq.roles.role_repository']
      end

      def operation_repository
        @operation_repository ||= EqTcm::Container['eq.operations.operation_repository']
      end
    end
  end
end