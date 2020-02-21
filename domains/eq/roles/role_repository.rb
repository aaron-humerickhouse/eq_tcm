# frozen_string_literal: true

module Eq
  module Roles
    # Eq::Companies::CompanyRepository
    class RoleRepository
      include RepositoryBase
      @orm_adapter = ::Role

      private

      def map_record(record)
        ::Eq::Roles::RoleEntity.new(
          id: record.id,
          name: record.name,
          description: record.description,
          created_at: record.created_at,
          updated_at: record.updated_at
        )
      end
    end
  end
end
