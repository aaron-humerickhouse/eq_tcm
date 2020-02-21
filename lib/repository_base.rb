# frozen_string_literal: true

# Base Repository
module RepositoryBase
  include Dry::Monads[:result]

  def load_all
    Success(@orm_adapter.find_all.lazy.map(&:map_record))
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end

  def load(id)
    Success(map_record(@orm_adapter.find(id)))
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end

  def load_by(*attrs)
    Success(map_record(@orm_adapter.find_by(*attrs)))
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end

  def update(*attrs)
    Success(@orm_adapter.update(*attrs))
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end

  def add(*attrs)
    Success(@orm_adapter.create(*attrs))
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end

  def destroy(record)
    record.destroy
    Success()
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end
end
