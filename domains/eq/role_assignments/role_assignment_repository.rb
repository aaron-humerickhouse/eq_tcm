# frozen_string_literal: true

module Eq
  module RoleAssignments
    # Eq::RoleAssignments::RoleAssignmentRepository
    class RoleAssignmentRepository < RepositoryBase
      def load_all_by_user(user)
        load_all_by_user_id(user.id)
      end

      def load_all_by_user_id(user_id)
        Success(map_records(orm_adapter.where(user_id: user_id)))
      rescue StandardError => e
        Failure(Error.from_exception(e))
      end

      def load_by_company(company)
        load_by_company_id(company.id)
      end

      def load_by_company_id(company_id)
        map_record(orm_adapter.find_by(company_id: company_id))
      end

      def load_by_assigner(assigner)
        load_by_assigner_id(assigner.id)
      end

      def load_by_assigner_id(assigner_id)
        map_record(orm_adapter.find_by(assigner_id: assigner_id))
      end

      def load_by_role(role)
        load_by_role_id(role.id)
      end

      def load_by_role_id(role_id)
        map_record(orm_adapter.find_by(role_id: role_id))
      end

      private

      def orm_adapter
        ::RoleAssignment
      end

      def map_record(record)
        user_entity = user_entity_factory.build(record.user)
        assigner_entity = user_entity_factory.build(record.assigner)
        role_entity = role_entity_factory.build(record.role)

        target_entity_factory = if record.target_type.capitalize == 'Company'
                                  company_entity_factory
                                elsif
                                  nil
                                end
        target_entity = target_entity_factory.build(record.target_type.capitalize.constantize.find(record.target_id))

        role_assignment_entity_factory.build(
          id: record.id,
          user: user_entity,
          target: target_entity,
          role: role_entity,
          assigner: assigner_entity,
          created_at: record.created_at,
          updated_at: record.updated_at
        )
      end

      def user_entity_factory
        @user_entity_factory ||= EqTcm::Container['eq.users.user_entity_factory']
      end

      def role_assignment_entity_factory
        @role_assignment_factory ||= EqTcm::Container['eq.role_assignments.role_assignment_entity_factory']
      end

      def company_entity_factory
        @company_entity_factory ||= EqTcm::Container['eq.companies.company_entity_factory']
      end

      def role_entity_factory
        @role_entity_factory ||= EqTcm::Container['eq.roles.role_entity_factory']
      end

    end
  end
end
