import { createStore } from "redux";
import _data from "./MOCK_DATA.json"; //_변수이름은 내부데이터를 이런식으로 이름 지어.컨벤션까지 하려면 변수명도 엄격하게 다대문자로는 상수,
function reducer(state, action) {
  let newData;
  let newState;
  newData = [...state.data];
  if (state === undefined) {
    let mockData = _data.concat(); //저기 목데이터에서 받아옴
    // let i = 0;
    // for (i = 0; i < newData.length; i++) {
    //   newData[i].like = 0;
    // }
    return {
      selected_id: 1,
      cart: [],
      data: mockData,
    };
  }
  //else로 묶고 elseif를 스위치문으로 써서 하지만 스위치문 위에 동일하게 하는 동작을 쓴다.
  else if (action.type === "like") {
    // newData = state.data; //이건 안되고
    // newData = state.data.concat(); //이렇게하니까 됨
    let newID = { selected_id: action.id };
    // let i = 0;
    let targetData = newData.find((currentData) => {
      return currentData.id === newID.selected_id;
    });
    // let targetData = newData.find(
    //   (currentData) => currentData.id === newID.selected_id
    // );
    // while (i < newData.length) {
    //   if (newID.selected_id === newData[i].id) {
    //     let newData2 = newData[i];
    //     newData2.like += 1; //저기에 같아진 newData[i].id에서의 like를 업데이트하고 싶어서 저렇게 함...
    //     console.log("라이크 수", newData2.like);
    //   }
    //   i = i + 1;
    // }
    //store에서 라이크는 더해지는데, 왜 화면에 먹지 않을까? -> newData = state.data.concat();ㅎ
    // console.log("ddd", targetData);
    targetData.like += 1;
    newState = { ...state, data: newData };
  } else if (action.type === "addCart") {
    let newID = { selected_id: action.id };
    let i = 0;
    let cart = state.cart;
    let newData = [...state.data];
    let newCart = cart.concat();
    // console.log(newCart);
    // while (i < data.length) {
    //   if (newID.selected_id === data[i].id) {
    //     newCart.push(data[i]);
    //   }
    //   i += 1;
    // }
    let targetData = newData.find((a) => a.id === newID.selected_id);
    let existData = newCart.find((a) => {
      return a.id === newID.selected_id;
    });
    if (existData === undefined) {
      newCart.push(targetData);
      newState = { ...state, cart: newCart };
    } else {
      alert("이미있다");
    }
  } //해야할거 카트 중복 피하기
  else if (action.type === "deleteCart") {
    let newCart = [...state.cart];
    // var i = 0;
    var newID = { selected_id: action.id };
    // while (i < state.cart.length) {
    //   if (newID.selected_id !== state.cart[i].id) {
    //     newCart.push(state.cart[i]); //newMember객체에 푸쉬
    //   }
    //   i += 1;
    // }
    let targetIndex = newCart.findIndex((a) => a.id === newID.selected_id);
    newCart.splice(targetIndex, 1);
    newState = { ...state, cart: newCart };
  } else if (action.type === "delete") {
    //지우는기능
    let newData = [...state.data];
    let newID = { selected_id: action.id }; //selected_id에 displaymember.jsx(containers)에서 받아온 action.id값을 넣어준다
    // while (i < state.data.length) {
    //   if (newID.selected_id !== state.data[i].id) {
    //     newData.push(state.data[i]); //newMember객체에 푸쉬
    //   }
    //   i += 1;
    // }
    let targetIndex = newData.findIndex((a) => a.id === newID.selected_id);
    newData.splice(targetIndex, 1);
    // newState = Object.assign({}, state, {
    //   data: newData, //새 스테이트에 새 멤버객체 저장
    // });
    newState = { ...state, data: newData };
  }
  // console.log(newState, action);
  return newState;
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
