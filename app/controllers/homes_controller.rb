class HomesController < ApplicationController

  def index
    if user_signed_in?
      redirect_to user_path(User.find(current_user).id)
    end
  end

end
