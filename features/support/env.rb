# frozen_string_literal: true

require 'awesome_print'
require 'capybara'
require 'capybara/cucumber'
require 'cucumber'
require 'dotenv'
require 'rspec'

SCREENSHOTS_DIR_PATH = './public/reports/screenshots'
REPORTS_PATH = './public/reports'

# Создание директории для скриншотов
def create_dir(path:, title:)
  if !Dir.exist?(path)
    Dir.mkdir(path, Oo0777)
    puts "Directory created #{title}: #{path}"
  else
    puts "Directory #{title} #{path}"
  end
end

Dotenv.load('./config/.env.local')
capybara_settings = YAML.safe_load(File.read('./capybara.yml'), [Symbol])

webdriver_settings = capybara_settings['webdriver_settings']
webdriver_settings.keys.each do |key|
  value = webdriver_settings[key]
  webdriver_settings[key.to_sym] = value
  webdriver_settings.delete(key)
end

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, webdriver_settings)
end

Capybara.default_driver = :selenium
Capybara.default_selector = :css
Capybara.default_max_wait_time = 10
Capybara.app_host = capybara_settings['app_host'][ENV['RAILS_ENV']]

RSpec.configure do |config|
  config.expect_with :rspec do |c|
    c.syntax = :expect
  end
end

# Create directory for reports
create_dir(path: REPORTS_PATH, title: 'with reports')

# Create directory with screenshots
create_dir(path: SCREENSHOTS_DIR_PATH, title: 'with screenshots')

Before do
  puts 'Start tests'
  Capybara.page.current_window.resize_to(1400, 860)
  Capybara.visit('/')
end

# Run after each scenario
After do |scenario|
  puts 'Finish tests'
  # Check, scenario is failed?
  if scenario.failed?
    time = Time.now.strftime('%Y_%m_%d_%Y_%H_%M_%S_')
    name_of_scenario = time + scenario.name.gsub(/\s+/, '_').gsub('/', '_')
    file_path = "#{File.expand_path(SCREENSHOTS_DIR_PATH)}/#{name_of_scenario}.png"
    puts "Screenshot created #{file_path}"
    page.driver.browser.save_screenshot file_path
  end
end
