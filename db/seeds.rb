# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

super_admin_user = FactoryBot.create(:user, :super_admin, email: 'aaron@example.com', first_name: 'Aaron', last_name: 'Humerickhouse')
acme_admin_user = FactoryBot.create(:user, email: 'super@acme.com', first_name: 'Acme', last_name: 'Admin')
widget_admin_user = FactoryBot.create(:user, email: 'super@widget.com', first_name: 'Widget', last_name: 'Admin')
both_admin_user = FactoryBot.create(:user, email: 'super@both.com', first_name: 'Both', last_name: 'Admin')

acme_company = FactoryBot.create(:company, name: 'Acme')
widget_company = FactoryBot.create(:company, name: 'Widget')

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
  description: 'Add a company'
)

edit_company = FactoryBot.create(
  :operation,
  name: 'Edit Company',
  description: 'Edit a company'
)

read_company = FactoryBot.create(
  :operation,
  name: 'Read Company',
  description: "Read a company's details"
)

delete_company = FactoryBot.create(
  :operation,
  name: 'Delete Company',
  description: 'Delete a company'
)

# Permissions
assign_role = FactoryBot.create(
  :operation,
  name: 'Assign Role',
  description: 'Assign a role.'
)

read_role = FactoryBot.create(
  :operation,
  name: 'Read Roles',
  description: 'Read roles.'
)

remove_role = FactoryBot.create(
  :operation,
  name: 'Remove Role',
  description: 'Remove a role assignment.'
)

# Permissions
# # company_admin
FactoryBot.create(:operation_role,
                  role: company_admin,
                  operation: read_company)
FactoryBot.create(:operation_role,
                  role: company_admin,
                  operation: edit_company)
FactoryBot.create(:operation_role,
                  role: company_admin,
                  operation: assign_role)
FactoryBot.create(:operation_role,
                  role: company_admin,
                  operation: remove_role)

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
