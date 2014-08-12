source 'https://rubygems.org'

gem 'rails', '4.0.6'
gem 'jquery-ui-rails'
gem 'chosen-rails'
gem 'xrono', git: 'git@github.com:isotope11/xrono.git', branch: 'rails4'
gem 'plutus'
gem 'decorators'
gem 'twilio-ruby'
gem 'whenever', :require => false
gem 'business_time'
gem 'sidekiq'
gem 'protected_attributes'
# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'coffee-rails'#, '~> 3.2.0'
  gem 'uglifier'#, '>= 1.3.0'
  gem 'compass'#, '~> 0.12.alpha.0'
  gem 'compass-rails'#, '1.1.7'
  gem 'bootstrap-sass', '2.0.1'
  gem 'sass-rails', '~> 4.0.0'
  gem 'sass', '~> 3.2.19'
end

group :development do
  gem 'awesome_print', '~> 0.4.0', :require => 'ap'
  gem 'rails_best_practices'
  gem 'capistrano', '2.14.2'
end

group :test do
  gem 'capybara', '2.2.0'
  gem 'rspec-rails'
  gem 'simplecov'
  gem 'shoulda-matchers', '~> 1.0'
  gem 'cucumber', '~> 1.1.4'
  gem 'cucumber-rails', '~> 1.2.1', :require => false
  gem 'selenium-webdriver'
  gem 'database_cleaner', '~> 0.7.1'
  gem 'faker', '~> 0.9.5'
  gem 'forgery', '= 0.3.10'
  gem 'launchy', '~> 0.3.7'
  gem 'machinist', '~> 1.0.6'
  gem 'pickle', '= 0.4.8'
  gem 'spork', '0.9.0.rc9'
end

group :test, :development do
  gem 'pry'
  gem 'ci_reporter'
end

platforms :jruby do
  gem 'activerecord-jdbcpostgresql-adapter'
  gem 'activerecord-jdbcmysql-adapter'
  gem 'jruby-openssl'
  gem 'trinidad'
end

platforms :ruby do
  gem 'pg'
  gem 'mysql2', '~> 0.3.0'
  # rails4 upgrade
  #gem 'actionpack-action_caching', '~>1.0.0'
  #gem 'actionpack-page_caching', '~>1.0.0'
  #gem 'actionpack-xml_parser', '~>1.0.0'
  #gem 'actionview-encoded_mail_to', '~>1.0.4'
  #gem 'activerecord-session_store', '~>0.0.1'
  #gem 'activeresource', '~>4.0.0.beta1'
  #gem 'protected_attributes', '~>1.0.1'
  #gem 'rails-observers', '~>0.1.1'
  #gem 'rails-perftest', '~>0.0.2'

end
