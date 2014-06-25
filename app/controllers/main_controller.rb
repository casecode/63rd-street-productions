class MainController < ApplicationController
  def index
    respond_to do |format|
      unless current_user.present?
        format.html {render :public_index, :layout => 'public'}
      else
        format.html {render :staff_index, :layout => 'staff'}
      end
    end
  end
end
