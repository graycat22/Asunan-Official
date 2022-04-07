class ApplicationController < ActionController::Base
  include SessionsHelper
  
  def current_cart
    Cart.find(session[:cart_id])
  rescue ActiveRecord::RecordNotFound
    cart = Cart.create
    session[:cart_id] = cart.id
    cart
  end
  
  private

  def require_user_logged_in
    unless logged_in?
      redirect_to login_url
    end
  end
end
