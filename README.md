# Currency monitor [![Build Status](https://travis-ci.org/r72cccp/currency-watcher.svg?branch=master)](https://travis-ci.org/r72cccp/currency-watcher) [![Coverage Status](https://coveralls.io/repos/github/r72cccp/currency-watcher/badge.svg?branch=master)](https://coveralls.io/github/r72cccp/currency-watcher?branch=master)

This application is built on the framework Ruby on Rails 6. The client part of the application is being assembled on webpack.
Its working on React and Redux;

The application with a background script updates the data on the quotation of the currency and in real time displays the
rate on the open pages of the application.

Root path is: `/` - this is the page with currency realtime monitor;

Also, the application provides the ability to set a fixed exchange rate for a certain time, during which the application
will only show it.

Admin path is: `/admin` - this is the page with admin interface to force currency rate. You are can set fixed rate and
this rate will shown on all opened pages;


* Ruby version

  2.7.0

* System dependencies

  - Foreman (`gem install foreman`)
  - PostgreSQL
  - redis

* Configuration

  copy file `/config/.env.local.example` to `/config/.env.local`

  set all secrets. Remember, if your password includes some unusual symbols like `:` - wrap password into single quotes.

* Database creation
```bash
bundle exec rails db:create
```

* Database initialization
```bash
bundle exec rails db:migrate
```

* How to run the test suite
```bash
bundle exec rake spec
```

* Services (job queues, cache servers, search engines, etc.)

  When Rails server are running, its periodically call market api and fetch currency rate. No any setups needed for that.

  To set forced currency rate from console, run:
  ```bash
  rake currency_monitoring:set_forced_currency_rate pair='USD/RUB' buy=77.99 sell=99.77 expired_at='2020-05-19 21:11:10'
  ```

  To renew currency rate from console, run:
  ```bash
  rake currency_monitoring:fetch_currency_rate
  ```

