module Eq
  module Users
    class UserService
      include Dry::Monads[:result, :do]

      def initialize(user)
        @user = user
      end

      # @return [Success<Array<Eq::RoleAssignments::RoleAssignmentEntity>> | Failure<Error>]
      def role_assignments
        role_assignment_repository.load_all_by_user(@user)
      end

      ##
      # Checks if the user has an operation on a scope
      # @param operation_slug [symbol] The operation to check for
      # @param resource [Entity] The resource to check against
      def has_permission?(operation_slug, resource)
        permissions.include?(
          target_id: resource.id,
          target_type: resource.class.to_s,
          operation: operation_slug
        )
      end

      ##
      # List of operations and resources a user has permissions for
      # cache-id: users/:id/:role_assignments_count/permissions
      def permissions
        cache_id = "#{@user.class}/#{@user.id}/#{yield(role_assignments).count}/permissions"
        Rails.cache.fetch(cache_id, expires_in: 12.hours) do
          yield(role_assignments).map do |ra|
            ra.role.operations.map do |operation|
              {
                target_id: ra.target_id,
                target_type: ra.target_type,
                operation: operation.slug.to_sym
              }
            end
          end.flatten
        end
      end

      private

      def role_assignment_repository
        @role_assignment_repository ||= EqTcm::Container['eq.role_assignments.role_assignment_repository']
      end
    end
  end
end