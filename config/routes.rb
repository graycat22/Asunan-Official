Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "homes#index"
  get "discography", to: "homes#discography"
  get "members", to: "homes#members"
  get "biography", to: "homes#biography"
  get "sns", to: "homes#sns"
  get "shop", to: "marts#index"
  get "special", to: "homes#special"
  
  get "signup", to: "users#new"
  get "goodbye", to: "users#delete"
  resources :users, only: [:new, :create, :delete]
  
  resources :products
  
  resources :carts, only: [:index] do
    member do
      get :cart
      get :nanika
      get :favorites
    end
    collection do
      get :info
    end
  end
  
  post "add_item", to: "carts#add_item"
  post "update_item", to: "carts#update_item"
  delete "delete_item", to: "carts#delete_item"
  
  resources :microposts, only: [:create, :destroy]
  
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
end
