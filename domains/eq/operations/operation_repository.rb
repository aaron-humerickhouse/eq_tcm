# frozen_string_literal: true

module Eq
  module Operations
    # Eq::Operations::OperationRepository
    class OperationRepository < RepositoryBase

      private

      def orm_adapter
        ::Operation
      end

      def map_record(record)
        ::Eq::Operations::OperationEntity.new(
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
