import AddMember from "../components/Member/AddMember";
import { connect } from "react-redux"; //완전 좋은 기능, react-redux 꿀기능 이거 개발한사람 천재
function mapReduxDispatchToReactProps(dispatch) {
  //리액트프롭스를 리덕스에 디스패치함
  return {
    onClick: function (name) {
      dispatch({ type: "ADD", name: name });
    },
  };
}
export default connect(null, mapReduxDispatchToReactProps)(AddMember);
//components의 addmember컴포넌트를 재사용하기 위해 여기서 스토어 관리하고 저기서는 리덕스없이 리액트로(state, props)만관리한다.
//괄호 2번. 커넥트를 실행하면 리턴값이 함수고 그 리턴된 함수를 다시 실행하는걸 통해서 만들어진 값을 export하는데 그 값이 우리가 수동으로 했었던 랩핑 컴포넌트를 만드는것과 똑같은 랩핑된 컴포넌트가 리턴되게 될것이다.
//리액트리덕스 connect구글링하기
//connect 첫번쨰 인자는 mapStateToProps 두번째 인자는 mapDispatchToProps가 온다.
