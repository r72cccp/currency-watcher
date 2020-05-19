# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_19_154634) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "currency_rates", force: :cascade do |t|
    t.string "pair", comment: "Names of currencies in exchange pair. bought/sold"
    t.decimal "buy", precision: 15, scale: 8, comment: "Buy price of bought currency in sold"
    t.decimal "sell", precision: 15, scale: 8, comment: "Sell price of bought currency in sold"
    t.decimal "ticker", precision: 10, comment: "Timestamp of market ticker"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "forced", comment: "Installed by Admin"
    t.index ["forced"], name: "index_currency_rates_on_forced"
    t.index ["pair"], name: "index_currency_rates_on_pair"
    t.index ["ticker"], name: "index_currency_rates_on_ticker"
  end

end
