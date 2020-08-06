class PermissionsController < ApplicationController
  include Dry::Monads[:do]

  def index
    user_id = params[:user_id]
    @permissions = yield permission_service.user_permissions(user_id)
  end
end
