import { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { add, minus, asyncAdd } from "../../actions/counter";
import A from "../../common/componentA";
import B from "../../common/componentB";

import "./index.scss";

@connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    },
  })
)
class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  dec = () => {
    debugger;
    this.props.dec();
  };
  render() {
    return (
      <View className="index">
        <Button className="add_btn" onClick={this.props.add}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.dec}>
          -
        </Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>
          async
        </Button>
        <View>
          <Text>{this.props.counter.num}</Text>
        </View>
        <View>
          <Text>Hello, World</Text>
        </View>
        <Button
          className="dec_btn"
          onClick={() => {
            Taro.navigateTo({ url: "../pageB/index" });
          }}
        >
          gotoB
        </Button>
        <A />
        <B />
      </View>
    );
  }
}

export default Index;
