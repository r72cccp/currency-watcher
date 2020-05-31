class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  class << self
    def create!(params)
      if ENV['ROW_LIMIT']
        existed_count = count
        row_limit = ENV['ROW_LIMIT'].to_i

        order(:created_at).limit(existed_count - row_limit).delete_all if existed_count > row_limit
      end
      super(params)
    end
  end
end
