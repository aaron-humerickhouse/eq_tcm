# frozen_string_literal: true

module Eq
  module Operations
    # Eq::Operations::OperationRepository
    class OperationRepository < RepositoryBase

      ##
      # Load and operation by id
      # @param id [integer]
      #
      # @return [Eq::Operations::OperationEntity]
      def load(id)
        map_record orm_adapter.find(id)
      end

      private

      def orm_adapter
        ::Operation
      end

      def map_record(record)
        ::Eq::Operations::OperationEntity.new(
          id: record.id,
          name: record.name,
          description: record.description,
          slug: record.slug,
          created_at: record.created_at,
          updated_at: record.updated_at
        )
      end
    end
  end
end
