import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import { Link } from "react-router-dom";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 1.5),
  },
}));

function Detail(props) {
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const [modify, setModify] = useState(false);
  const data = props.data;
  console.log(data);
  const [inputValue, setInputValue] = useState({
    title: data.title,
    director: data.director,
  });
  const handleClose = (e) => {
    handleSubmit(e);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    data.director = inputValue.director;
    data.title = inputValue.title;
    props.close(); //메소드는 실행이 된다. 여기서 정의한 메소드든 상속받은 메소드든.
  };

  //   const onEdit = () => {
  //     setModify((preModify) => {
  //       return !preModify;
  //     });
  //   };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div id="simple-modal-description">
        <p>제목:{data.title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}</p>
        <p>감독:{data.director}</p>
        <p>배우:{data.actor}</p>
        <p>평점:{data.userRating}</p>
        <p>개봉년도:{data.pubDate}</p>
        {/* <button onClick={onEdit}>수정</button> */}
        <button onClick={() => setModify((prev) => !prev)}>수정</button>
        <Link to={`/cart`}>
          <button onClick={() => props.onAddCart(data)}>카트담기</button>
        </Link>
      </div>
    </div>
  );
  const inputBody = (
    <form onSubmit={handleSubmit}>
      <div style={modalStyle} className={classes.paper}>
        <div id="simple-modal-description">
          <span>제목:</span>
          <input
            name="title"
            value={inputValue.title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
            onChange={handleChange}
          />
          <br />
          <span>감독:</span>
          <input
            name="director"
            value={inputValue.director}
            onChange={handleChange}
          />
          <p>배우:{data.actor}</p>
          <p>평점:{data.userRating}</p>
          <p>개봉년도:{data.pubDate}</p>
          <button type="submit">저장</button>
        </div>
      </div>
    </form>
  );
  return (
    <div>
      <Modal
        open={props.open ? true : false}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>{modify ? inputBody : body}</div>
      </Modal>
    </div>
  );
}
export default Detail;
