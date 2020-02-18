# frozen_string_literal: true

module Eq
  module Tcm
    # Eq::Tcm::UserEntity
    class UserEntity < EntityBase
      attribute :id, Types::Integer.optional
      attribute :email, Types::String
      attribute :first_name, Types::String
      attribute :last_name, Types::String
      attribute :reset_password_token, Types::String.optional
      attribute :reset_password_sent_at, Types::Date.optional
      attribute :remember_created_at, Types::Date.optional
      attribute :created_at, Types::Date.optional
      attribute :updated_at, Types::Date.optional
    end
  end
end
