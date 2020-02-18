# frozen_string_literal: true

module Eq
  module Users
    # Eq::Users::UserRepository
    class UserRepository < RepositoryBase
      def initialize(orm_adapter = Models::User)
        super
      end

      private

      def map_record(record)
        UserEntity.new.tap do |user|
          user.id                      = record.id
          user.email                   = record.name
          user.first_name              = record.image
          user.last_name               = record.description
          user.reset_password_token    = record.reset_password_token
          user.reset_password_sent_at  = record.reset_password_sent_at
          user.remember_created_at     = record.remember_created_at
          user.created_at              = record.created_at
          user.updated_at              = record.updated_at
        end
      end
    end
  end
end
