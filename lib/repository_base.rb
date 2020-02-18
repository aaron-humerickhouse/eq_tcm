# frozen_string_literal: true

# Base Repository
module RepositoryBase
  def load_all
    @orm_adapter.find_each.lazy.map(&:map_record)
  end

  def load(id)
    map_record(@orm_adapter.find(id))
  end
end
