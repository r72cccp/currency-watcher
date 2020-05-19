class AddColumnForcedToCurrencyRates < ActiveRecord::Migration[6.0]
  def change
    add_column :currency_rates, :forced, :boolean, comment: 'Installed by Admin'
    add_index :currency_rates, :forced
  end
end
