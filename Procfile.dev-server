web: unset PORT && bundle exec puma -C config/puma.rb
client: sh -c 'rm -rf public/packs/* || true && bundle exec rake react_on_rails:locale && bin/webpack-dev-server'
