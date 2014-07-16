Rails.application.routes.draw do

  root 'main#public_home'
  get '/robots.txt' => 'main#robots'
end
