import React from "react";
import Label from "../components/Label";
import Button from "../components/Button";

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
      <div>
        <Label text={`This is a counter: ${this.state.count}`} />
        <Button action={this.incrementCount}>Increment count</Button>
      </div>
    );
  }
}

export default Counter;
