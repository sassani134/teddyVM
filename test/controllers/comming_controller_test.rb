require "test_helper"

class CommingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get comming_index_url
    assert_response :success
  end
end
