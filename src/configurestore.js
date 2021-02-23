// import { createStore } from "redux";
// import _data from "./MOCK_DATA.json";
// function reducer(state, action) {
//   let newData = _data.concat();
//   let i = 0;
//   for (i = 0; i < newData.length; i++) {
//     newData[i].like = 0;
//   }
//   if (state === undefined) {
//     return {
//       selected_id: 1,
//       cart: [],
//       data: newData,
//     };
//   }

//   let newState;
//   if (action.type === "like") {
//     newData = [];
//     let newID = { selected_id: action.id };
//     while (i < state.data.length) {
//       if (newID.selected_id !== state.data[i].id) {
//         newData.push(state.data[i]);
//       }
//     }
//     newState = { ...state, data: newData };
//   }
//   return newState;
// }

// export default createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

import { createStore } from "redux"; //createStore api가져오기

function reducer(state, action) {
  //리듀서함수. state는 이전 상태정보, action은 실행한 함수
  if (state === undefined) {
    //기본값
    return {
      max_id: 3,
      selected_id: 1,
      member: [
        { id: 1, name: "지영" },
        { id: 2, name: "결" },
        { id: 3, name: "은학" },
      ],
    };
  }
  var newState;
  if (action.type === "ADD") {
    var newMaxId = state.max_id + 1;
    let newMember = state.member.concat(); //문자열 합치기 newMember에 기존 member배열 저장
    newMember.push({
      id: newMaxId,
      name: action.name, //addMember.jsx에서 받아온 action.name저장
    });
    // newState = Object.assign({}, state, {
    //   max_id: newMaxId,
    //   member: newMember,
    // });
    newState = { ...state, max_id: newMaxId, member: newMember };
    // return { ...state, member: state.member + " " + action.name };
    //  object.assign 대신 ... 사용해서 할 순 없을까?
  } else if (action.type === "DELETE") {
    //지우는기능
    let newMember = [];
    var i = 0;
    var newID = { selected_id: action.id }; //selected_id에 displaymember.jsx(containers)에서 받아온 action.id값을 넣어준다
    while (i < state.member.length) {
      if (newID.selected_id !== state.member[i].id) {
        newMember.push(state.member[i]); //newMember객체에 푸쉬
      }
      i += 1;
    }
    newState = Object.assign({}, state, {
      member: newMember, //새 스테이트에 새 멤버객체 저장
    });
  }
  console.log(newState, action);
  return newState; //새로운 상태 반환
}
export default createStore(
  reducer, //46번째줄에서 반환한 값 여기에 저장스
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
