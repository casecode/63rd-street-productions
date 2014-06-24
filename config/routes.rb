Rails.application.routes.draw do

  # Add routes for Public and Staff SPAs
  root 'main#public'
  get '/staff' => 'main#staff'
  # Add route for robots
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
