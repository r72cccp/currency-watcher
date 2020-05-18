# frozen_string_literal = true
require 'rails_helper'

RSpec.describe CurrencyRate, type: :model do
  context 'validations' do
    it { should validate_presence_of :pair }
    it { should validate_presence_of :ticker }
  end
end

