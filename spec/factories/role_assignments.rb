FactoryBot.define do
  factory :role_assignment do
    user { FactoryBot.build(:user) }
    target { FactoryBot.build(:company) }
    role { FactoryBot.build(:role) }
    assigner { FactoryBot.build(:user) }
  end
end
