FactoryBot.define do
  factory :user do
    email { Faker::Internet.safe_email }
    password { 'Test1234' }
  end
end
