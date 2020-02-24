module Eq
  module Users
    class UserService
      def initialize(user)
        @user = user
      end

      # @return [Success<Array<Eq::RoleAssignments::RoleAssignmentEntity>> | Failure<Error>]
      def role_assignments
        role_assignment_repository.load_all_by_user(@user)
      end

      private

      def role_assignment_repository
        @role_assignment_repository ||= EqTcm::Container['eq.role_assignments.role_assignment_repository']
      end
    end
  end
end