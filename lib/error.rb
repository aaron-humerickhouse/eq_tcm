# frozen_string_literal: true

# Error
class Error
  def initialize(code:, message:, backtrace: {})
    @code = code
    @message = message
    @backtrace = backtrace
  end

  def self.from_exception(err)
    Error.new(code: :internal, message: err.message, backtrace: err.backtrace)
  end
end
