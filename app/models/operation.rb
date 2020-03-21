# frozen_string_literal: true

class Operation < ApplicationRecord
  has_many :roles, through: OperationRole
  has_many :operation_roles

  OPERATIONS = %i[
    create_project
    show_project
    update_project
    destroy_project

    create_company
    show_company
    update_company
    destroy_company

    assign_role
    show_role
    remove_role
  ].freeze

end
