# frozen_string_literal: true

module Eq
  module RoleAssignments
    # Eq::RoleAssignments::RoleAssignmentEntity
    class RoleAssignmentEntity < EntityBase
      attribute :id, Types::Integer.optional
      attribute :user, Types.Instance(Eq::Users::UserEntity)
      attribute :target, Types.Instance(Eq::Companies::CompanyEntity)
      attribute :role, Types.Instance(Eq::Roles::RoleEntity)
      attribute :assigner, Types.Instance(Eq::Users::UserEntity)
      attribute :created_at, Types::Time.optional
      attribute :updated_at, Types::Time.optional
    end
  end
end
