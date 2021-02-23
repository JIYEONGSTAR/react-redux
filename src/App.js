// import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
// import Main from "./components/Main";
// import Cart from "./components/Cart";
// import Nav from "./components/Nav";
// import Item from "./components/Item";
// import data from "./MOCK_DATA.json";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       producets: data,
//       cart: [],
//       quantity: 1,
//     };
//   }
//  // 내가 추가한 무비들
//   handleAddToCart(selected) {
//     let cartItem = this.state.cart; //새로운 변수를 만들어 나중에 스테이트에 집어넣음
//     let movieID = selected.id; //선택된 영화 아이디
//     if (this.checkProduct(movieID)) {
//       let index = cartItem.findIndex((item) => {
//         return item.id === movieID;
//       });
//       cartItem[index].quantity += 1;
//       this.setState({ cart: cartItem }); //스테이트에 집어넣음
//     } else {
//       cartItem.push(selected);
//       this.setState({ cart: cartItem, quantity: 1 });
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Nav />
//         <Switch>
//           <Route
//             exact
//             path="/"
//             render={(props) => {
//               return <Main products={this.state.products} />;
//             }}
//           />
//           <Route
//             path="/cart"
//             render={() => {
//               return <Cart cart={this.state.cart} />;
//             }}
//           />
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;
import Nav from "./components/Nav";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/css/main.css";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
