source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.0'

gem 'arask', '~> 1.2'
gem 'awesome_print', '~> 1.8'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'colorize', '~> 0.8.1'
gem 'dotenv-rails', '~> 2.7'
gem 'haml-rails', '~> 2.0'
gem 'jbuilder', '~> 2.7'
gem 'listen', '~> 3.2'
gem 'mini_racer', platforms: :ruby
gem 'puma', '~> 4.1'
gem 'rails', '~> 6.0.3'
gem 'react_on_rails', '~> 11.3'
gem 'rspec-rails', '4.0.1'
gem 'sass-rails', '>= 6'
gem 'turbolinks', '~> 5'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
gem 'webmock', '~> 3.8'
gem 'webpacker', '~> 4.0'

group :development, :production do
  gem 'pg', '>= 0.18', '< 2.0'
end

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'spring'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'coveralls', '0.8.23', require: false
  gem 'selenium-webdriver'
  gem 'shoulda-matchers', '~> 4.3'
  gem 'simplecov', '~> 0.16.1'
  gem 'sqlite3', '~> 1.4'
  gem 'webdrivers'
end
