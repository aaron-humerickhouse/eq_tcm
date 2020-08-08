# frozen_string_literal: true

# Company Controller
class CompaniesController < ApplicationController
  before_action :set_company, only: %i[show update destroy]

  # GET /companies
  # GET /companies.json
  def index
    @companies = policy_scope(Company)
  end

  # GET /companies/1.json
  def show
    authorize @company
  end


  # POST /companies.json
  def create
    @company = Company.new(company_params)

    if @company.save
      render :show, status: :created, location: @company
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /companies/1.json
  def update
    if @company.update(company_params)
      render :show, status: :ok, location: @company
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  # DELETE /companies/1.json
  def destroy
    @company.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_company
    @company = Company.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def company_params
    params.require(:company).permit(:name, :logo)
  end
end
