source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.5'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker'

gem 'execjs'
gem 'mini_racer'

gem 'react-rails'
gem 'jquery-rails'
gem 'materialize-sass'
gem 'sass'

gem 'simplecov'
gem 'mocha'
gem 'test-unit'
gem 'rake'
gem 'codecov', :require => false, :group => :test

#Security issue
gem "sprockets", ">= 3.7.2"

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do


end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.

  gem 'listen', '>= 3.0.5', '< 3.2'
end




gem 'slim-rails'
group :development, :test do
  gem 'dotenv-rails'
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'pry-stack_explorer'
  gem 'binding_of_caller'
  gem 'better_errors'
  gem 'view_source_map'
  gem 'awesome_print'
end
