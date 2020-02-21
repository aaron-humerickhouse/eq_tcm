# frozen_string_literal: true

module Eq
  module Users
    # Eq::Users::UserRepository
    class UserRepository
      include RepositoryBase
      @orm_adapter = ::User

      def load_by_email(email)
        map_record(@orm_adapter.find_by_email(email))
      end

      private

      def map_record(record)
        ::Eq::Users::UserEntity.new(
          id: record.id,
          email: record.email,
          first_name: record.first_name,
          last_name: record.last_name,
          reset_password_token: record.reset_password_token,
          reset_password_sent_at: record.reset_password_sent_at,
          remember_created_at: record.remember_created_at,
          created_at: record.created_at,
          updated_at: record.updated_at
        )
      end
    end
  end
end
