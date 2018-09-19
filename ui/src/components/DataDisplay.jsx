import * as React from "react"
import { FlexItem, Text } from "react-super-styled"

class DataDisplay extends React.Component {
  render() {
    return <FlexItem>{this.displayData(this.props.data)}</FlexItem>
  }

  displayData = data => {
    return data.map(d => {
      return (
        <Text color="gold" large={true} key={d}>
          {" "}
          {d}{" "}
        </Text>
      )
    })
  }
}

export default DataDisplay
