FactoryBot.define do
  factory :role_assignment do
    user { FactoryBot.build(:user) }
    target { FactoryBot.build(:company) }
    role { FactoryBot.build(:role) }
    assigner { FactoryBot.build(:user) }

    trait :with_operations do
      after(:build) do |role_assignment|
        operation = create :operation
        role_assignment.role.operations << operation
      end
    end
  end
end
