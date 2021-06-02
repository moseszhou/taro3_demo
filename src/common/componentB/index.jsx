import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";

export default class Index extends Component {
  b = () => {
    //index.jsx
    //index.jsx
    console.log("component B");
  };
  render() {
    return (
      <View>
        <Text>componet B</Text>
        <Button className="add_btn" onClick={this.b}>
          B
        </Button>
      </View>
    );
  }
}
