# frozen_string_literal: true

# Base Repository
class RepositoryBase
  include Dry::Monads[:result, :do]

  def initialize; end

  def load_all
    Success(orm_adapter.find_all.lazy.map(&:map_record))
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end

  def load(id)
    Success(map_record(orm_adapter.find(id)))
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end

  def load_by(*attrs)
    Success(map_record(orm_adapter.find_by(*attrs)))
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end

  def load_all_by(*attrs)
    Success(map_records(orm_adapter.where(*attrs)))
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end

  def update(*attrs)
    Success(orm_adapter.update(*attrs))
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end

  def add(*attrs)
    Success(orm_adapter.create(*attrs))
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end

  def destroy(record)
    record.destroy
    Success()
  rescue StandardError => e
    Failure(Error.from_exception(e))
  end

  private

  def map_record(record)
    raise "map_record not implemented for #{self.class}"
  end

  def map_records(records)
    records.map do |record|
      map_record(record)
    end
  end
end
