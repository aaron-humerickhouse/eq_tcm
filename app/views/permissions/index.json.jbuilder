# frozen_string_literal: true

json.array! @permissions do |permission|
  json.partial! 'permissions/permission', permission: permission
end
