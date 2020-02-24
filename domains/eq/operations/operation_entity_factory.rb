# frozen_string_literal: true

module Eq
  module Operations
    # Eq::Operations::OperationEntityFactory
    class OperationEntityFactory
      def build(hash)
        OperationEntity.new(
          id: hash[:id],
          name: hash[:name],
          description: hash[:description],
          created_at: hash[:created_at],
          updated_at: hash[:updated_at]
        )
      end
    end
  end
end
