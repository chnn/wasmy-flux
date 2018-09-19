import * as React from "react"

class Error extends React.Component {
  render() {
    return (
      <pre>
        <code>{this.props.message}</code>
      </pre>
    )
  }
}

export default Error
