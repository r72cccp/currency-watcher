# Currency monitor [![Coverage Status](https://coveralls.io/repos/github/r72cccp/currency-watcher/badge.svg?branch=master)](https://coveralls.io/github/r72cccp/currency-watcher?branch=master)

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
  2.7.0

* System dependencies
  Foreman (`gem install foreman`)
  PostgreSQL
  redis

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

  Add to crontab rake task which fetch currency rate:
  ```bash
  crontab -e
  * * * * * for i in {1..6}; do /bin/bash -l -c 'cd <path> && RAILS_ENV=development bundle exec rake currency_monitoring:fetch_currency_rate' & sleep 10; done
  ```

  To set forced currency rate from console, run:
  ```bash
  rake currency_monitoring:set_forced_currency_rate pair='USD/RUB' buy=77.99 sell=99.77 expired_at='2020-05-19 21:11:10'
  ```

  To renew currency rate from console, run:
  ```bash
  rake currency_monitoring:fetch_currency_rate
  ```

* Deployment instructions

* ...
