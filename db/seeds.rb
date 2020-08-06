# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Starting Seeding'

super_admin_user = FactoryBot.create(:user, :super_admin, email: 'aaron@example.com', first_name: 'Aaron', last_name: 'Humerickhouse')
acme_admin_user = FactoryBot.create(:user, email: 'admin@acme.com', first_name: 'Acme', last_name: 'Admin')
widget_admin_user = FactoryBot.create(:user, email: 'admin@widget.com', first_name: 'Widget', last_name: 'Admin')
both_admin_user = FactoryBot.create(:user, email: 'admin@both.com', first_name: 'Both', last_name: 'Admin')

acme_company = FactoryBot.create(:company, name: 'Acme')
widget_company = FactoryBot.create(:company, name: 'Widget')

acme_project = FactoryBot.create(:project, name: 'ACME Project', company: acme_company)
widget_project = FactoryBot.create(:project, name: 'Widget Project', company: widget_company)

# Roles
company_admin = FactoryBot.create(
  :role,
  name: 'Company Administrator',
  description: 'All controls over company projects and settings.'
)

project_admin = FactoryBot.create(
  :role,
  name: 'Project Administrator',
  description: 'All controls over individual projects and settings.'
)

test_writer = FactoryBot.create(
  :role,
  name: 'Test Writer',
  description: 'Controls over tests and test suites.'
)

test_executor = FactoryBot.create(
  :role,
  name: 'Test Executor',
  description: 'Ability to run tests and test suites.'
)

reporter = FactoryBot.create(
  :role,
  name: 'Reporter',
  description: 'Ability to generate reports.'
)

member = FactoryBot.create(
  :role,
  name: 'Member',
  description: 'Member of a company.'
)

# Operations
# Company
add_company = FactoryBot.create(
  :operation,
  name: 'Add Company',
  description: 'Add a company',
  slug: Operations::Company::CREATE
)

update_company = FactoryBot.create(
  :operation,
  name: 'Edit Company',
  description: 'Edit a company',
  slug: Operations::Company::UPDATE
)

read_company = FactoryBot.create(
  :operation,
  name: 'Read Company',
  description: "Read a company's details",
  slug: Operations::Company::READ
)

delete_company = FactoryBot.create(
  :operation,
  name: 'Delete Company',
  description: 'Delete a company',
  slug: Operations::Company::DESTROY
)

# Permissions
assign_role = FactoryBot.create(
  :operation,
  name: 'Assign Role',
  description: 'Assign a role.',
  slug: Operations::Role::ASSIGN
)

read_role = FactoryBot.create(
  :operation,
  name: 'Read Roles',
  description: 'Read roles.',
  slug: Operations::Role::READ
)

remove_role = FactoryBot.create(
  :operation,
  name: 'Remove Role',
  description: 'Remove a role assignment.',
  slug: Operations::Role::REMOVE
)

create_project = FactoryBot.create(
  :operation,
  name: 'Add Project',
  description: 'Add a Project.',
  slug: Operations::Project::CREATE
)
update_project = FactoryBot.create(
  :operation,
  name: 'Edit Project',
  description: 'Edit a Project.',
  slug: Operations::Project::UPDATE
)
delete_project = FactoryBot.create(
  :operation,
  name: 'Delete Project',
  description: 'Delete a Project.',
  slug: Operations::Project::DESTROY
)
read_project = FactoryBot.create(
  :operation,
  name: 'Read Project',
  description: 'Read Projects.',
  slug: Operations::Project::READ
)

# Permissions
# # company_admin
admin_operations = [
  read_company, update_company,
  assign_role, remove_role, create_project,
  update_project, delete_project, read_project
]

admin_operations.each do |operation|
  FactoryBot.create(:operation_role,
                    role: company_admin,
                    operation: operation)
end

# # project_admin
# # test_writer
# # test_executor
# # reporter
# # member

# Assignments
FactoryBot.create(:role_assignment,
                  user: acme_admin_user,
                  target: acme_company,
                  role: company_admin,
                  assigner: super_admin_user)

FactoryBot.create(:role_assignment,
                  user: widget_admin_user,
                  target: widget_company,
                  role: company_admin,
                  assigner: super_admin_user)

FactoryBot.create(:role_assignment,
                  user: both_admin_user,
                  target: acme_company,
                  role: company_admin,
                  assigner: super_admin_user)

FactoryBot.create(:role_assignment,
                  user: both_admin_user,
                  target: widget_company,
                  role: company_admin,
                  assigner: super_admin_user)

puts 'Finished Seeding'
