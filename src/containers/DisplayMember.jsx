import DisplayMember from "../components/Member/DisplayMember";
import { connect } from "react-redux";
function mapReduxStateToReactProps(state) {
  return { member: state.member };
}
function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function (id) {
      dispatch({ type: "DELETE", id: id });
    },
  };
}
export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(DisplayMember);
