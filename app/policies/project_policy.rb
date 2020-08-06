class ProjectPolicy
  include Dry::Monads[:do, :result]
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record

    @permissions = Eq::Permissions::PermissionService.new.user_permissions(user.id).value_or([])
  end

  def index?
    false
  end

  def show?
    projects = []
    read_projects = @permissions.select { |permission| permission[:operation].include?(Eq::Operations::Project::READ) }
    read_projects.each do |permission|
      projects << permission[:target_type].constantize.find(permission[:target_id]).projects
    end

    projects.flatten.map(&:id).include?(@record.id)
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

      @permissions = Eq::Permissions::PermissionService.new.user_permissions(user.id).value_or([])
    end

    def resolve
      projects = []
      read_projects = @permissions.select { |permission| permission[:operation].include?(Eq::Operations::Project::READ) }
      read_projects.each do |permission|
        projects << permission[:target_type].constantize.find(permission[:target_id]).projects
      end
      projects.flatten
    end
  end
end