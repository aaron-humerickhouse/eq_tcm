# frozen_string_literal: true

module Eq
  module Users
    # Eq::Users::UserEntityFactory
    class UserEntityFactory
      def initialize; end

      def build(hash)
        Eq::Users::UserEntity.new(
          id: hash[:id],
          email: hash[:email],
          first_name: hash[:first_name],
          last_name: hash[:last_name],
          reset_password_token: hash[:reset_password_token],
          reset_password_sent_at: hash[:reset_password_sent_at],
          remember_created_at: hash[:remember_created_at],
          created_at: hash[:created_at],
          updated_at: hash[:updated_at]
        )
      end
    end
  end
end
