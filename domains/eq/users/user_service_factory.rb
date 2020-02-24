module Eq
  module Users
    class UserServiceFactory
      def initialize; end

      def build(user)
        raise 'User is not an entity' unless user.is_a?(Eq::Users::UserEntity)

        UserService.new(user)
      end
    end
  end
end