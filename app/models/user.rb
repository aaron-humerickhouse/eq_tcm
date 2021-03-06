# frozen_string_literal: true

# User Model
class User < ApplicationRecord
  has_many :role_assignments, foreign_key: :assigner_id
  has_many :role_assignments

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def generate_jwt
    JWT.encode({ id: id,
                 exp: 30.days.from_now.to_i },
               Rails.application.secrets.secret_key_base)
  end
end
