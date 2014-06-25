class MainController < ApplicationController

  def home
    respond_to do |format|
      format.html
    end
  end

  def dashboard
    respond_to do |format|
      format.html {render :layout => 'dashboard'}
    end
  end

  def robots
    robots = File.read(Rails.root + "config/robots/robots.#{Rails.env}.txt")
    render :text => robots, :layout => false, :content_type => "text/plain"
  end
end
