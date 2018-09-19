import * as React from "react"
import { FlexItem } from "react-super-styled"

import { parse_query as parseQuery } from "wasmy_flux"

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

    const { scriptInput } = this.state

    const err = parseQuery(scriptInput)

    if (err) {
      this.props.onError({ message: err })
    }
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
