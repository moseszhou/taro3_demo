import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";

export default class Index extends Component {
  a = () => {
    debugger;
    console.log("component A");
  };
  render() {
    return (
      <View>
        <Text>componet A</Text>
        <Button className="add_btn" onClick={this.a}>
          A
        </Button>
      </View>
    );
  }
}
