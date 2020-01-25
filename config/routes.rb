Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  scope :api do
    scope :v1 do
      devise_for :users,
               path: '', # optional namespace or empty string for no space
               path_names: {
                 sign_in: 'login',
                 sign_out: 'logout',
                 password: 'secret',
                 confirmation: 'verification',
                 registration: 'register',
                 sign_up: 'signup'
               },
               controllers: {
                 confirmations: 'users/confirmations',
                 passwords: 'users/passwords',
                 registrations: 'users/registrations',
                 sessions: 'users/sessions',
                 unlocks: 'users/unlocks'
               }

      resource :user, only: [:show, :update]
    end
  end
end
