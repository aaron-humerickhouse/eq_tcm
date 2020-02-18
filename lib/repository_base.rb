# frozen_string_literal: true

# Base Repository
class RepositoryBase
  def initialize(orm_adapter)
    @orm_adapter = orm_adapter
  end

  def load_all
    @orm_adapter.find_each.lazy.map(&:map_record)
  end
end
