class AddSlugToOperation < ActiveRecord::Migration[6.0]
  def change
    add_column :operations, :slug, :string, null: false, default: ''
  end
end
