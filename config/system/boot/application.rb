# Use bootable componets to manually register framework dependencies
EqTcm::Container.boot(:application) do |app|
  app.register(:logger) { Rails.logger }
  # app.namespace(:widgets) do |widgets|
  #   widgets.register(:notification, memoize: true) { Widgets::NotificationJob }
  # end
end
