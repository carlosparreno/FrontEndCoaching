import React from "react";
import Label from "../components/Label";
import Button from "../components/Button";
import "../css/Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="counter-container">
        <Label text={`This is a counter: ${this.state.count}`} />
        <Button className="counter-button" action={this.incrementCount}>
          Increment count
        </Button>
      </div>
    );
  }
}

export default Counter;
