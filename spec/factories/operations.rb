FactoryBot.define do
  factory :operation do
    name { Faker::Games::ElderScrolls.race }
    description { Faker::Games::SonicTheHedgehog.zone }

    after(:build) { |operation| operation.slug = operation.name.parameterize.underscore }
  end
end
