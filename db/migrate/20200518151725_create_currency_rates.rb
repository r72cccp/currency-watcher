# frozen_string_literal: true

class CreateCurrencyRates < ActiveRecord::Migration[6.0]
  def change
    create_table :currency_rates do |t|
      t.string :pair, comment: 'Names of currencies in exchange pair. bought/sold'
      t.decimal :buy, precision: 15, scale: 8, comment: 'Buy price of bought currency in sold'
      t.decimal :sell, precision: 15, scale: 8, comment: 'Sell price of bought currency in sold'
      t.decimal :ticker, precision: 10, comment: 'Timestamp of market ticker'

      t.timestamps
    end
    add_index :currency_rates, :pair
    add_index :currency_rates, :ticker
  end
end
