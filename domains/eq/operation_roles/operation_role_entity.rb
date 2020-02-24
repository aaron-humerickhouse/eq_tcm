# frozen_string_literal: true

module Eq
  module OperationRoles
    # Eq::OperationRoles::OperationRoleEntity
    class OperationRoleEntity < EntityBase
      attribute :id, Types::Integer.optional
      attribute :role, Types.Instance(Eq::Roles::RoleEntity)
      attribute :operation, Types.Instance(Eq::Operations::OperationEntity)
    end
  end
end
