import React, { Component } from "react";
import AddMemberRoot from "./components/Member/AddMemberRoot";
import DisplayMemberRoot from "./components/Member/DisplayMemberRoot";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>root</h1>
        <AddMemberRoot />
        <DisplayMemberRoot />
      </div>
    );
  }
}

// import React, { Component } from "react";

// export class Main extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//     };
//   }

//   componentDidMount = () => {
//     fetch("http://localhost:3000/data/data.json")
//       .then((res) => res.json())
//       .then((res) => {
//         console.log("firstly: ", res.items);
//         this.setState(
//           {
//             data: res.items,
//           },
//           () => {
//             console.log("secondly: ", this.state.data);
//           }
//         );
//       });
//   };

//   render() {
//     console.log("thirdly: ", this.state.data);
//     return <div>hello</div>;
//   }
// }

// export default Main;
