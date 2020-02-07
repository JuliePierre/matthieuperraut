Rails.application.routes.draw do
  root "pages#home"
  get 'mediatheque', to: "pages#mediatheque", as: :mediatheque

  # REDIRECTIONS
  get '/minitransat.html', to: redirect('/')
  get '/projet.html', to: redirect('/')
  get '/programme.html', to: redirect('/')
  get '/bateau.html', to: redirect('/')
  get '/partenaires.html', to: redirect('/')
  get '/media.html', to: redirect('/')
  get '/actualites.html', to: redirect('/')
end
