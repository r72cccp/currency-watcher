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
end
