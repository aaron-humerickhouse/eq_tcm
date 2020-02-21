# frozen_string_literal: true

module Eq
  module Users
    # Eq::Users::UserEntity
    class UserEntity < EntityBase
      attribute :id, Types::Integer.optional
      attribute :email, Types::Strict::String
      attribute :first_name, Types::Strict::String
      attribute :last_name, Types::Strict::String
      attribute :reset_password_token, Types::String.optional
      attribute :reset_password_sent_at, Types::Time.optional
      attribute :remember_created_at, Types::Time.optional
      attribute :created_at, Types::Time.optional
      attribute :updated_at, Types::Time.optional
    end
  end
end
