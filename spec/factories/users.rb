FactoryBot.define do
  factory :user do
    email { Faker::Internet.safe_email }
    password { 'Test1234' }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
  end
end