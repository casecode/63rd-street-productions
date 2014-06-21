Rails.application.routes.draw do

  # Add route for robots
  get '/robots.txt' => 'pages#robots'
end
