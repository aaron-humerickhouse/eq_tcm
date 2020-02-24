# frozen_string_literal: true

module Eq
  module Companies
    # Eq::Companies::CompanyEntityFactory
    class CompanyEntityFactory
      def initialize; end

      def build(hash)
        CompanyEntity.new(
          id: hash[:id],
          name: hash[:name],
          logo: hash[:logo],
          created_at: hash[:created_at],
          updated_at: hash[:updated_at]
        )
      end
    end
  end
end
