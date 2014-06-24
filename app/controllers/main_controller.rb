class MainController < ApplicationController

  def public
    respond_to do |format|
      format.html {render :layout => 'public'}
    end
  end

  def staff
    respond_to do |format|
      format.html {render :layout => 'staff'}
    end
  end
end
