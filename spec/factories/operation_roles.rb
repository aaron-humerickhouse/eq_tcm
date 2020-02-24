FactoryBot.define do
  factory :operation_role do
    role { FactoryBot.build(:role) }
    operation { FactoryBot.build(:operation) }
  end
end
