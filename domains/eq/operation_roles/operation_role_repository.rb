# frozen_string_literal: true

module Eq
  module OperationRoles
    # Eq::OperationRoles::OperationRoleRepository
    class OperationRoleRepository < RepositoryBase
      def load_by_role(role)
        load_by_role_id(role.id)
      end

      def load_by_role_id(role_id)
        map_record(orm_adapter.find_by(role_id: role_id))
      end

      def load_by_operation(operation)
        load_by_operation_id(operation.id)
      end

      def load_by_operation_id(operation_id)
        map_record(orm_adapter.find_by(operation_id: operation_id))
      end

      private

      def orm_adapter
        ::OperationRole
      end

      def map_record(record)
        ::Eq::Operations::OperationEntity.new(
          id: record.id,
          role: record.role,
          operation: record.operation,
          created_at: record.created_at,
          updated_at: record.updated_at
        )
      end
    end
  end
end
