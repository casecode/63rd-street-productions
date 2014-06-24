class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /api/users
  def index
    users = User.all
    render json: users, status: 200
  end

  # GET /api/users/:id
  def show
    render json: user, status: 200
  end

  # POST /api/users
  def create
    user = User.create(user_params)
    render json: user, status: 201
  end

  # PATCH/PUT /api/users/:id
  def update
    user.update_attributes(user_params)
    render nothing: true, status: 204
  end

  # DELETE /api/users/:id
  def destroy
    user.destroy
    render nothing: true, status: 204
  end

  private

  def set_user
    user = User.find(params[:id])
  end

  def user_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
