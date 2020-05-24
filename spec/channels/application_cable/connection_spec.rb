# frozen_string_literal: true

require 'rails_helper'
RSpec.describe ApplicationCable::Connection, type: :channel do
  it 'successfully connects' do
    expect { connect '/cable' }.to output(/\bconnected\b/).to_stdout
  end
end
