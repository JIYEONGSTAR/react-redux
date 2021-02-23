import React, { Component } from "react";
import BoxList from "../List/BoxList";
import TableList from "../List/TableList";
import Detail from "./Detail";
export class Main extends Component {
  //모달같은 경우엔 굳이 스토어 이용하지 않고 컴포넌트 안 스테이트만 이용해도 될듯
  state = {
    modalData: "",
    edit: false,
    open: false,
  };
  handleDetail = (id) => {
    let data = this.props.data.filter((m) => m.id === id);
    this.setState({ modalData: data });
    this.setState({ edit: true });
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ edit: false });
    this.setState({ open: false });
  };
  handleDelete = (e) => {
    this.props.handleDelete(e.id);
  };
  handleCart = (e) => {
    this.props.handleCart(e.id);
    this.handleClose();
  };
  render() {
    let data = this.props.data;
    console.log("main에서 데이터");
    console.log(data);
    return (
      <div>
        <div className="boxLists">
          <BoxList
            data={data}
            onLike={function (e) {
              console.log(e.id);
              this.props.handleLike(e.id);
            }.bind(this)}
            onAddCart={function (e) {
              this.props.handleCart(e.id);
            }.bind(this)}
            onDelete={function (e) {
              this.props.handleDelete(e.id);
            }.bind(this)} //이렇게랑 혹은 onDelete={this.handleDelete} 이렇게 두가지 방법
            onDetail={function (e) {
              this.handleDetail(e.id);
            }.bind(this)}
          />
        </div>
        <div className="tableLists">
          <TableList
            data={data}
            onLike={function (e) {
              console.log(e.id);
              this.props.handleLike(e.id);
            }.bind(this)}
            onAddCart={function (e) {
              this.props.handleCart(e.id);
            }.bind(this)}
            onDelete={this.handleDelete}
            onDetail={function (e) {
              this.handleDetail(e.id);
            }.bind(this)}
          />
          {this.state.edit ? (
            <Detail
              data={this.state.modalData[0]}
              open={this.state.open}
              close={this.handleClose}
              onAddCart={this.handleCart}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Main;
