# frozen_string_literal: true

class AgeGatesController < ApplicationController
  def index; end

  def verification
    session[:age_verification] = params[:verification].presence
    render turbo_stream: turbo_stream.remove(:age_verification)
  end
end
