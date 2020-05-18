# frozen_string_literal = true
Rails.application.routes.draw do
  get '/hello-world', to: 'hello_world#index'
  get '/', to: 'watcher#view'
end
