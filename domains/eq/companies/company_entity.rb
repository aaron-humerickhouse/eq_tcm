# frozen_string_literal: true

module Eq
  module Companies
    # Eq::Companies::CompanyEntity
    class CompanyEntity < EntityBase
      attribute :id, Types::Integer.optional
      attribute :name, Types::Strict::String
      attribute :description, Types::Strict::String
      attribute :created_at, Types::Time.optional
      attribute :updated_at, Types::Time.optional
    end
  end
end
