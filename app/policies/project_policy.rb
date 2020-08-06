class ProjectPolicy
  include Dry::Monads[:do, :result]
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    false
  end

  def show?
    false
  end

  def create?
    false
  end

  def update?
    false
  end

  def destroy?
    false
  end

  class Scope
    include Dry::Monads[:do, :result]
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      projects = []
      permissions = yield Eq::Permissions::PermissionService.new.user_permissions(user.id)

      read_projects = permissions.select { |permission| permission[:operation].include?('read_project') }
      read_projects.each do |permission|
        projects << permission[:target_type].constantize.find(permission[:target_id]).projects
      end
      projects.flatten
    end
  end
end