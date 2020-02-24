# frozen_string_literal: true

module Eq
  module Roles
    # Eq::Roles::RoleRepository
    class RoleRepository < RepositoryBase
      def operations(role)
        operations = OperationRole.where(role_id: role.id).map(&:operation).map do |operation|
          operation_entity_factory.build(operation)
        end
        Success(operations)
      rescue StandardError => e
        Failure(Error.from_exception(e))
      end

      private

      def orm_adapter
        ::Role
      end

      def map_record(record)
        ::Eq::Roles::RoleEntity.new(
          id: record.id,
          name: record.name,
          description: record.description,
          created_at: record.created_at,
          updated_at: record.updated_at
        )
      end

      def operation_entity_factory
        @operation_entity_factory ||= EqTcm::Container['eq.operations.operation_entity_factory']
      end
    end
  end
end
