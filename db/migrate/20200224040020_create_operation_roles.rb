class CreateOperationRoles < ActiveRecord::Migration[6.0]
  def change
    create_table :operation_roles do |t|
      t.references :operation, **{ null: false, foreign_key: true, index: true }
      t.references :role, **{ null: false, foreign_key: true, index: true }

      t.timestamps
    end
  end
end
