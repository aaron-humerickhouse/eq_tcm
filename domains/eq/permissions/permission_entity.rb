# frozen_string_literal: true

module Eq
  module Permissions
    # Eq::Permissions::PermissionEntity
    class PermissionEntity < EntityBase
      attribute :target, Types::Instance(Eq::Companies::CompanyEntity)
      attribute :operations, Types::Strict::Array.of(Types.Instance(Eq::Operations::OperationEntity))
    end
  end
end
