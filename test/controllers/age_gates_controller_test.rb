# frozen_string_literal: true

require 'test_helper'

class AgeGatesControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get age_gates_index_url
    assert_response :success
  end
end
