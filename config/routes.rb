Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users,
             path: '', # optional namespace or empty string for no space
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               password: 'secret',
               confirmation: 'verification',
               registration: 'register',
               sign_up: 'signup'
             }

  root to: 'home#index'
end
