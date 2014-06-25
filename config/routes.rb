Rails.application.routes.draw do

  root 'main#index'
  get '/robots.txt' => 'robots#set_robots'

  namespace :api, defaults: {format: :json} do
    resources :users
  end

  devise_for :users, :skip => [:sessions, :registrations]
  as :user do
    get 'login' => 'devise/sessions#new', :as => :new_user_session
    post 'login' => 'devise/sessions#create', :as => :user_session
    delete 'logout' => 'devise/sessions#destroy', :as => :destroy_user_session
  end
end
