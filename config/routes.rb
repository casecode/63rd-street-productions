Rails.application.routes.draw do

  # Add routes for Public and Staff SPAs
  root 'main#public'
  get '/staff' => 'main#staff'
  # Add route for robots
  get '/robots.txt' => 'robots#set_robots'
end
