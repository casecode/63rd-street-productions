Rails.application.routes.draw do

  # Add routes for Public and Staff SPAs
  root 'main#public'
  get '/staff' => 'main#staff'
  # Add route for robots
  get '/robots.txt' => 'robots#set_robots'

  # For simplicity, use default Devise routes outside of api namespace
  # This will also help ensure compatibility with angular_devise library
  devise_for :users, defaults: {format: :json}

  namespace :api, defaults: {format: :json} do
    resources :users
  end

end
