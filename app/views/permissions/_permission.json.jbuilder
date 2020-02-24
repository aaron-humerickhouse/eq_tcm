# frozen_string_literal: true

json.target_type permission.target.is_a?(Eq::Companies::CompanyEntity) ? 'Company' : nil
json.target_id permission.target.id
json.permissions permission.operations.map { |op| op.name.parameterize }.uniq
