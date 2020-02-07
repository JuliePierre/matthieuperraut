class ApplicationController < ActionController::Base
  prepend_view_path Rails.root.join("frontend")
  def default_url_options
    { host: ENV["DOMAIN"] || "localhost:3000" }
  end
end
