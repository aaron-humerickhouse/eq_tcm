class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :name, **{ unique: true, null: false }
      t.string :logo

      t.timestamps
    end
  end
end
