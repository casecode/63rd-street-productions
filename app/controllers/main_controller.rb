class MainController < ApplicationController

  def public_home
  end

  def robots
    robots = File.read(Rails.root + "config/robots/robots.#{Rails.env}.txt")
    render :text => robots, :layout => false, :content_type => "text/plain"
  end
end
