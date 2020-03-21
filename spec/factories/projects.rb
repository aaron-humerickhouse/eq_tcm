FactoryBot.define do
  factory :project do
    name { Faker::Company.buzzword }
    description { Faker::Lorem.sentence }
    company
  end
end
