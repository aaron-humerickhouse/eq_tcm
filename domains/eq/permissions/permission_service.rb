module Eq
  module Permissions
    class PermissionService
      include Dry::Monads[:result, :do]

      def initialize; end

      ##
      # Get user permissions by user id
      # @param user_id [Integer]
      # @return [Dry::Monads::Result]
      def user_permissions(user_id)
        permissions_repository.load_by_user_id(user_id)
      end

      private

      def permissions_repository
        @permissions_repository ||= EqTcm::Container['eq.permissions.permissions_repository']
      end
    end
  end
end