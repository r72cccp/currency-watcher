# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
  2.7.0

* System dependencies
  Foreman (`gem install foreman`)
  PostgreSQL

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

* Deployment instructions

* ...
