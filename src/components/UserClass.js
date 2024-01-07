import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 1,
    };
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h1>count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increase count
        </button>{" "}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Ddecrease me count
        </button>
        <h3>Location: {location}</h3>
        <h4>contact@nsarbusiness@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
