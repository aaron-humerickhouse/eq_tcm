# frozen_string_literal: true

module Eq
  module Companies
    # Eq::Companies::CompanyRepository
    class CompanyRepository
      include RepositoryBase
      @orm_adapter = ::Company

      private

      def map_record(record)
        ::Eq::Companies::CompanyEntity.new(
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
