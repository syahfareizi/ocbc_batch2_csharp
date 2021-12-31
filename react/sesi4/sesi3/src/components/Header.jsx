import React from "react";
import { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Syah Fareizi",
      counter: 0,
    };
  }

  changeName = (name) => {
    this.setState({
      username: name,
    });
    console.log(this.props);
  };
  changeNumber = (type) => {
    let oldCounter = this.state.counter;
    switch (type) {
      case "increment":
        this.setState({
          counter: this.state.counter < 10 ? oldCounter + 1 : 0,
        });
        break;
      default:
        this.setState({
          counter: this.state.counter < 0 ? oldCounter - 1 : 0,
        });
        break;
    }
  };
  render() {
    return (
      <>
        <h3>
          FSD OCBC NISP BATCH {this.props.batch}, Selamat datang
          {this.state.username}
        </h3>
        <button onClick={() => this.changeName("Syah Muhammad Alfareizi")}>
          Change User
        </button>
        <img src={this.props.logo} alt="logo" />
        <h3> Let's Count </h3>
        <h3> {this.state.counter}</h3>
        <button onClick={() => this.changeNumber("increment")}>
          Tambah angka 1
        </button>
        <button onClick={() => this.changeNumber("decrement")}>
          Kurang angka 1
        </button>
      </>
    );
  }
}
