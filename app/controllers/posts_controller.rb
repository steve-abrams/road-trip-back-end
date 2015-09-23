class PostsController < ApplicationController

  def index
    @posts = Post.where(trip_id: params[:trip_id], user_id: params[:user_id])
    respond_to do |format|
      format.html
      format.json {render json: @posts}
    end
  end

  def create
    p post_params
    p params
    @post = Post.new(post_params)
    @post.trip_id = params[:trip_id]
    @post.user_id = params[:user_id]
    if @post.save
      flash[:notice] = "Post Successfully Saved"
      respond_to do |format|
        format.json {render json: @post}
      end
    else
      flash[:notice] = "Post could not be saved"
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to user_trip_path(current_user.id, params[:trip_id])
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      redirect_to user_trip_path(current_user.id, params[:trip_id])
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :latitude, :longitude, :trip_id, :user_id)
  end
end
