Rails.application.routes.draw do

  root 'main#public_home'
  get '/robots.txt' => 'main#robots'

  resources :users
  devise_for :users, :skip => [:sessions, :passwords]
  as :user do
    post '/login' => 'devise/sessions#create', defaults: {format: :json}, :as => :user_session
    delete '/logout' => 'devise/sessions#destroy', defaults: {format: :json}, :as => :destroy_user_session
  end
end
