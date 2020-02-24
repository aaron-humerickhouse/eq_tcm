class CreateRoleAssignments < ActiveRecord::Migration[6.0]
  def change
    create_table :role_assignments do |t|
      t.references :user,  **{ null: false, foreign_key: true, index: true }
      t.references :target, **{ null: false, index: true, polymorphic: true }
      t.references :role, **{ null: false, foreign_key: true, index: true }
      t.integer :assigner_id, **{ null: false, foreign_key: true, index: true }

      t.timestamps
    end
  end
end
