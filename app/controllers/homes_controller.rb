class HomesController < ApplicationController
  def index
  end

  def discography
  end

  def members
  end

  def event
  end

  def sns
    @micropost = current_user.microposts.build
    @microposts = current_user.microposts.order(id: :desc)
  end

  def biography
  end

  def special
  end
end
