# frozen_string_literal: true

Dry::System::Rails.container do
  load_paths!('domains')
  # you can set it to whatever you want and add as many dirs you want
  config.auto_register << 'lib'
  config.auto_register << 'domains'
end
