class CreateRoles < ActiveRecord::Migration[6.0]
  def change
    create_table :roles do |t|
      t.string :name, **{ unique: true, null: false }
      t.string :description, **{ null: false }

      t.timestamps
    end
  end
end
