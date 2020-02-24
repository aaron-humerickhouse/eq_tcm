# frozen_string_literal: true

module Eq
  module Users
    # Eq::Users::UserRepository
    class UserRepository < RepositoryBase

      def load_by_email(email)
        map_record(orm_adapter.find_by(email: email))
      end

      private

      def orm_adapter
        ::User
      end

      def map_record(record)
        user_entity_factory.build(record)
      end

      def user_entity_factory
        @user_entity_factory ||= EqTcm::Container['eq.users.user_entity_factory']
      end
    end
  end
end
