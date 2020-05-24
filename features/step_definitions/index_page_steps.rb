# frozen_string_literal: true

# Defining steps on the index page
When(/^User open currency monitoring page$/) do
  index_page = IndexPage.new
  index_page.open_index_page
end

Then(/^Index page opening$/) do
  index_page = IndexPage.new
  index_page.index_page?
end

Then(/^There is a header on index page$/) do
  index_page = IndexPage.new
  index_page.header_present?
end

Then(/^There is a footer on index page$/) do
  index_page = IndexPage.new
  index_page.footer_present?
end
