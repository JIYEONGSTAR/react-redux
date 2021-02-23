import { Link } from "react-router-dom";
function TableList(props) {
  return (
    <table className="movieTable">
      <thead>
        <tr>
          <th>썸네일</th>
          <th onClick={() => props.onSortPage()}>
            제목
            <i className="fas fa-sort" />
          </th>
          <th>감독</th>
          <th>배우</th>
          <th>평점</th>
          <th>제작년도</th>
          <th>삭제/수정</th>
          <th>좋아요</th>
          <th>카트담기</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((d) => (
          <tr>
            <td>
              <img src={d.image} alt="" />
            </td>
            <td>{d.title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}</td>
            <td>{d.director}</td>
            <td>{d.actor}</td>
            <td>{d.userRating}</td>
            <td>{d.pubDate}</td>
            <td>
              <button onClick={() => props.onDelete(d)}>삭제</button>
              <button onClick={() => props.onDetail(d)}>세부사항</button>
            </td>
            <td>
              <button value="like" onClick={() => props.onLike(d)}>
                🥰
              </button>
              {d.like}
            </td>
            <td>
              <Link to={`/cart`}>
                <button value="addcart" onClick={() => props.onAddCart(d)}>
                  추가
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TableList;
