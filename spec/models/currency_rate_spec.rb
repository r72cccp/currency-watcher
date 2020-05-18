# frozen_string_literal = true
require 'rails_helper'

RSpec.describe CurrencyRate, type: :model do
  context 'with validations' do
    it { is_expected.to validate_presence_of :pair }
    it { is_expected.to validate_presence_of :ticker }
  end
end

