// import Main from "../components/Main";
import { connect } from "react-redux";
// import BoxList from "../List/BoxList";
import Main from "../components/Main";
function mapStateToProps(state) {
  return { data: state.data };
}
function mapDispatchToProps(dispatch) {
  return {
    handleLike: function (id) {
      dispatch({ type: "like", id: id });
    },
    handleCart: function (id) {
      dispatch({ type: "addCart", id: id });
    },
    handleDelete: function (id) {
      dispatch({ type: "delete", id: id });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
