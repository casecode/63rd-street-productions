Rails.application.routes.draw do

  # Add route for robots
  get '/robots.txt' => 'robots#set_robots'
end
