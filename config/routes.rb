Rails.application.routes.draw do

  root 'home#main'
  # Add route for robots
  get '/robots.txt' => 'robots#set_robots'
end
