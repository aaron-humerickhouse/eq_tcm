# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
   def create
     #TODO: Better authentication method
     basic = request.authorization.gsub('Basic ', '')
     auth_params = Base64.decode64(basic).split(':')
     email = auth_params[0]
     password = auth_params[1]

     user = User.find_by_email(email)

     if user && user.valid_password?(password)
       cookies[:eq_jwt] = {
         value: user.generate_jwt,
         expires: 30.days.from_now,
       }
       @current_user = user
     else
       render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
     end
   end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
  #

end
