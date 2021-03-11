import { createStore } from "redux";
import _data from "./MOCK_DATA.json"; //_변수이름은 내부데이터를 이런식으로 이름 지어.컨벤션까지 하려면 변수명도 엄격하게 다대문자로는 상수,
function reducer(state, action) {
  if (state === undefined) {
    let mockData = _data.concat(); //목데이터에서 받아옴
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
  let newData = [...state.data];
  let newCart = [...state.cart];
  let newState;
  let newID = { selected_id: action.id };
  let targetData = newData.find((currentData) => {
    return currentData.id === newID.selected_id;
  });
  let targetIndex = newData.findIndex(
    (currentData) => currentData.id === newID.selected_id
  );
  let existData = newCart.find((currentData) => {
    return currentData.id === newID.selected_id;
  });
  switch (action.type) {
    case "like":
      targetData.like += 1;
      break;
    case "addCart":
      if (existData === undefined) {
        newCart.push(targetData);
      } else {
        alert("이미 넣어있는 상품입니다.");
      }
      break;
    case "deleteCart":
      newCart.splice(targetIndex, 1);
      break;
    case "delete":
      newData.splice(targetIndex, 1);
      break;
    default:
      break;
  }
  newState = { ...state, data: newData, cart: newCart };
  return newState;
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
