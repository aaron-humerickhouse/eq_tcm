# frozen_string_literal: true

# Application Controller
class ApplicationController < ActionController::Base
  include Pundit

  respond_to :json

  protect_from_forgery with: :null_session

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  before_action :authenticate_user
  before_action :set_csrf_cookie
  # after_action :verify_authorized

  private

  def authenticate_user
    return unless request.headers['Authorization']&.include?('Token')

    authenticate_or_request_with_http_token do |token|
      jwt_payload = JWT.decode(token, Rails.application.secrets.secret_key_base).first

      @current_user_id = jwt_payload['id']
    rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
      head :unauthorized
    end
  end

  def authenticate_user!(_options = {})
    head :unauthorized unless signed_in?
  end

  def current_user
    @current_user ||= super || User.find(@current_user_id)
  end

  def signed_in?
    @current_user_id.present?
  end

  def set_csrf_cookie
    cookies['CSRF-TOKEN'] = form_authenticity_token
  end

  def permission_service
    @permission_service ||= EqTcm::Container['eq.permissions.permission_service']
  end

  def user_not_authorized
    render json: {}, status: :forbidden
  end
end
