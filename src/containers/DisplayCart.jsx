import { connect } from "react-redux";
import Cart from "../components/Cart";
function mapStateToProps(state) {
  return { data: state.cart };
}
function mapDispatchToProps(dispatch) {
  return {
    handleCartDelete: function (id) {
      dispatch({ type: "deleteCart", id: id });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
