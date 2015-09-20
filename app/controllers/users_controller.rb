class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    respond_to do |format|
      format.html
      format.json {render json: @user}
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
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

  private

  def user_params
    params.require(:user).permit(:name, :hometown_city, :hometown_state, :favorite_place, :show_city)
  end

end
