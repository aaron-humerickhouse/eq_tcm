module Eq
  module RoleAssignments
    # Eq::RoleAssignments::RoleAssignmentEntityFactory
    class RoleAssignmentEntityFactory
      def build(hash)
        RoleAssignmentEntity.new(
          id: hash[:id],
          user: hash[:user],
          target: hash[:target],
          role: hash[:role],
          assigner: hash[:assigner],
          created_at: hash[:created_at],
          updated_at: hash[:updated_at]
        )
      end
    end
  end
end
