# frozen_string_literal: true

# Index page
class IndexPage
  include RSpec::Matchers

  # Open the index page
  def open_index_page
    Capybara.visit('/')
  end

  # Checks if the open page is index page
  def index_page?
    Capybara.has_css?('#index-page')
  end

  # Checking whether there are header on the index page
  def header_present?
    return false unless index_page?

    Capybara.has_css?('#header')
  end

  # Checking whether there are footer on the index page
  def footer_present?
    return false unless index_page?

    Capybara.has_css?('#footer')
  end

  # Checking whether there are currency rate info on the index page
  def currency_rate_info_present?
    return false unless index_page?

    pair_name = Capybara.find('#body span#pair').text
    buy_price = Capybara.find('#body span#buy-price').text
    sell_price = Capybara.find('#body span#sell-price').text
    [pair_name, buy_price, sell_price].all?
  end
end
