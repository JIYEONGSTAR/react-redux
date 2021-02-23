import React, { Component } from "react";

export default class DisplayMember extends Component {
  render() {
    var member = this.props.member;
    // var i = 0;
    // var liTags = [];
    // while (i < member.length) {
    //   liTags.push(
    //     <li>
    //       {member[i].name}
    //       {member[i].id}
    //       <button
    //         onClick={function (e) {
    //           e.preventDefault();
    //           console.log(member);
    //           this.props.onClick(i); //여기에 i값 대신 member[i].id 넣고싶은데 값이 없대ㅠㅠㅠㅠㅠ 진짜 너무 짜증나
    //         }.bind(this)}
    //       >
    //         삭제
    //       </button>
    //     </li>
    //   );
    //   i = i + 1;
    // }
    console.log(this.props.member);
    return (
      <div>
        <h1>DisplayMember</h1>
        <table>
          {member.map((list) => (
            <tr>
              <td>{list.name}</td>
              <button
                value="delete"
                onClick={() => this.props.onClick(list.id)}
              >
                삭제
              </button>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
