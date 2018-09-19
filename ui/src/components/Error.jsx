import * as React from "react"
import { Block, FlexItem, Text } from "react-super-styled"

class Error extends React.Component {
  render() {
    return (
      <FlexItem>
        <Block center={true} styles="background-color: orange; solid white">
          <Text> {this.props.message} </Text>
        </Block>
      </FlexItem>
    )
  }
}

export default Error
