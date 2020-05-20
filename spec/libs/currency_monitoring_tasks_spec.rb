require 'rails_helper'

RSpec.describe 'CurrencyRateTask' do
  describe 'Set forced currency by Admin' do
    it 'call tsks without arguments raises error' do
      rake_task = Rake::Task['currency_monitoring:set_forced_currency_rate']
      expect { rake_task.invoke }.to raise_error(ArgumentError)
    end
  end
end
