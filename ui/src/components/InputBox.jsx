import * as React from "react"
import { FlexItem } from "react-super-styled"

class InputBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scriptInput: ""
    }
  }

  updateScript = e => {
    this.setState({
      scriptInput: e.target.value
    })
  }

  parse = e => {
    e.preventDefault()

    const success = true

    if (success) {
      this.props.onResults(["data 1", "data 2", "data 3"])
      return
    }

    this.props.onError({ message: "Error! " })
  }

  render() {
    return (
      <FlexItem>
        <form
          onSubmit={this.parse}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end"
          }}
        >
          <textarea
            style={{
              border: "none",
              boxShadow: "none",
              height: 200,
              outline: "none",
              overflow: "auto",
              resize: "none",
              width: 500
            }}
            value={this.state.scriptInput}
            onChange={this.updateScript}
          />
          <input type="submit" value={"Parse!"} />
        </form>
      </FlexItem>
    )
  }
}

export default InputBox
