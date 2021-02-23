import { createStore } from "redux";
import _data from "./MOCK_DATA.json";
function reducer(state, action) {
  let newData = _data.concat(); //저기 목데이터에서 받아옴
  let newState;
  if (state === undefined) {
    let i = 0;
    for (i = 0; i < newData.length; i++) {
      newData[i].like = 0;
    }
    return {
      selected_id: 1,
      cart: [], //일단 제일 위에있는거 카트에 담아놓음
      data: newData,
    };
  } else if (action.type === "like") {
    // newData = state.data; 이건 안되고
    newData = state.data.concat(); //이렇게하니까 됨
    let newID = { selected_id: action.id };
    let i = 0;
    while (i < newData.length) {
      if (newID.selected_id === newData[i].id) {
        let newData2 = newData[i];
        newData2.like += 1; //저기에 같아진 newData[i].id에서의 like를 업데이트하고 싶어서 저렇게 함...
        console.log("라이크 수", newData2.like);
      }
      i = i + 1;
    }
    //store에서 라이크는 더해지는데, 왜 화면에 먹지 않을까? -> newData = state.data.concat();ㅎ

    newState = { ...state, data: newData };
  } else if (action.type === "addCart") {
    let newID = { selected_id: action.id };
    let i = 0;
    let cart = state.cart;
    let data = state.data;
    let newCart = cart.concat();
    console.log(newCart);
    while (i < data.length) {
      if (newID.selected_id === data[i].id) {
        newCart.push(data[i]);
      }
      i += 1;
    }
    newState = { ...state, cart: newCart };
  } //해야할거 카트 중복 피하기
  else if (action.type === "deleteCart") {
    let newCart = [];
    var i = 0;
    var newID = { selected_id: action.id };
    while (i < state.cart.length) {
      if (newID.selected_id !== state.cart[i].id) {
        newCart.push(state.cart[i]); //newMember객체에 푸쉬
      }
      i += 1;
    }
    newState = { ...state, cart: newCart };
  } else if (action.type === "delete") {
    //지우는기능
    let newData = [];
    let i = 0;
    let newID = { selected_id: action.id }; //selected_id에 displaymember.jsx(containers)에서 받아온 action.id값을 넣어준다
    while (i < state.data.length) {
      if (newID.selected_id !== state.data[i].id) {
        newData.push(state.data[i]); //newMember객체에 푸쉬
      }
      i += 1;
    }
    newState = Object.assign({}, state, {
      data: newData, //새 스테이트에 새 멤버객체 저장
    });
  }
  console.log(newState, action);
  return newState;
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
