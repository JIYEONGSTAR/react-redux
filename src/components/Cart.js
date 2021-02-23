import React, { Component } from "react";
import CartList from "../List/CartList";
export class Cart extends Component {
  render() {
    let data = this.props.data;
    console.log("cart에서 데이터");
    console.log(data);
    return (
      <div>
        <div className="tableLists">
          <CartList
            data={data}
            onDelete={function (e) {
              this.props.handleCartDelete(e.id);
            }.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Cart;
