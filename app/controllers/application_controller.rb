class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  def after_sign_in_path_for(resource)
  user_path(User.find(current_user).id)
  end
  def after_sign_up_path_for(resource)
  user_path(User.find(current_user).id)
  end
  def after_sign_out_path_for(resource)
    root_path
  end
  protect_from_forgery with: :exception
end
