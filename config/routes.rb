Rails.application.routes.draw do

  root 'main#index'
  get '/dashboard' => 'main#dashboard'
  get '/robots.txt' => 'robots#set_robots'

  namespace :api, defaults: {format: :json} do
    resources :users
  end

  devise_for :users, :skip => [:sessions, :registrations, :passwords]
  as :user do
    post '/dashboard/login' => 'devise/sessions#create', defaults: {format: :json}, :as => :user_session
    delete '/dashboard/logout' => 'devise/sessions#destroy', defaults: {format: :json}, :as => :destroy_user_session
  end

end
