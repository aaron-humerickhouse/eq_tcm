# frozen_string_literal: true

module Eq
  module Roles
    # Eq::Roles::RoleEntityFactory
    class RoleEntityFactory
      def initialize; end

      def build(hash)
        RoleEntity.new(
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
