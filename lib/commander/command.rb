# frozen_string_literal: true

module Commander
  # Commander::Command
  class Command
    # @param [Comander::Request] request
    def call(_request)
      raise NotImplementedError, "Call is not implemented for #{self.class}"
    end
  end
end
