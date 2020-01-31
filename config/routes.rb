Rails.application.routes.draw do
  root "pages#home"
  get 'mediatheque', to: "pages#mediatheque", as: :mediatheque
end
