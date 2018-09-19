import * as React from "react"

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
    let err = parseQuery(scriptInput)

    if (err === "") {
      err = "No syntax errors—nice job!"
    }

    this.props.onError({ message: err })
  }

  render() {
    return (
      <form onSubmit={this.parse}>
        <textarea
          value={this.state.scriptInput}
          rows={10}
          onChange={this.updateScript}
        />
        <button type="submit">Parse!</button>
      </form>
    )
  }
}

export default InputBox
