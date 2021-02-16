import React, { Component } from "react";

export default class DisplayMember extends Component {
  render() {
    var i = 0;
    var liTags = [];
    var member = this.props.member;
    while (i < member.length) {
      liTags.push(
        <li>
          {member[i].name}
          <button
            onClick={function () {
              this.props.onClick(i); //여기에 i값 대신 member[i].id 넣고싶은데 값이 없대ㅠㅠㅠㅠㅠ 진짜 너무 짜증나
            }.bind(this)}
          >
            삭제
          </button>
        </li>
      );
      i = i + 1;
    }

    return (
      <div>
        <h1>DisplayMember</h1>
        <ol>{liTags}</ol>
      </div>
    );
  }
}
