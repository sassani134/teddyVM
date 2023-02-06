Rails.application.routes.draw do
  get 'age_gates/index'
  get 'cookies/index'
  get 'cookies/policy'
  get 'landing/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "landing#index"
end
