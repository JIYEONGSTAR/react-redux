// import React from "react";
// import { Link } from "react-router-dom";
// function BoxList(props) {
//   return props.data.map((p) => {
//     return (
//       <div className="boxList">
//         <Link className="productImg" to={`/item/${p.id}`}>
//           <img src={p.image} alt="img"></img>
//         </Link>
//         <div className="productName">
//           <p className="productTitle">{p.title}</p>
//         </div>
//       </div>
//     );
//   });
// }

// export default BoxList;

import React, { Component } from "react";
import { Link } from "react-router-dom";
export class BoxList extends Component {
  render() {
    let data = this.props.data;
    return data.map((d) => {
      return (
        <div className="boxList">
          {/* <Link className="productImg" to={`/item/${d.id}`}>
            <img src={d.image} alt="img"></img>
          </Link> 
          이렇게하면 링크가 넘어가서 어떻게 되긴 하는데 나는 모달로 할고임*/}
          <img
            src={d.image}
            alt="img"
            onClick={() => this.props.onDetail(d)}
          ></img>
          <div className="productName">
            <p className="productTitle">{d.title}</p>
            <button value="like" onClick={() => this.props.onLike(d)}>
              🥰
            </button>
            {d.like}
            <Link to={`/cart`}>
              <button value="addcart" onClick={() => this.props.onAddCart(d)}>
                카트담기
              </button>
            </Link>
            <button value="delete" onClick={() => this.props.onDelete(d)}>
              삭제
            </button>
          </div>
        </div>
      );
    });
  }
}

export default BoxList;
