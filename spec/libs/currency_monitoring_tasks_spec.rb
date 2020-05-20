# frozen_string_literals = true
require 'rails_helper'

RSpec.describe 'CurrencyRate' do
  let (:rake_task) { Rake::Task['currency_monitoring:set_forced_currency_rate'] }

  describe 'Set forced currency by Admin' do
    it 'call tasks without arguments raises error' do
      expect {
        rake_task.reenable
        rake_task.invoke
      }.to raise_error(ArgumentError)
    end
  end
end
