class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(params_id)
      redirect_to user_path(@user.id)
    else
      render :edit
    end
  end

  def destroy
    if User.find(params[:id]).destroy
      redirect_to root_path
    else
        render :show
    end
  end

end
