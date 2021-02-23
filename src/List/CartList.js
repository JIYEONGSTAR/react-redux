import React from "react";

function CartList(props) {
  return (
    <table className="cartTable">
      <thead>
        <tr>
          <th>썸네일</th>
          <th onClick={() => props.onSortPage()}>
            제목
            <i className="fas fa-sort" />
          </th>
          <th>삭제/수정</th>
          <th>좋아요</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((c) => (
          <tr>
            <td>
              <img src={c.image} alt="" />
            </td>
            <td>{c.title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}</td>
            <td>
              <button onClick={() => props.onDelete(c)}>카트에서 삭제</button>
            </td>
            <td>
              🥰
              {c.like}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CartList;
