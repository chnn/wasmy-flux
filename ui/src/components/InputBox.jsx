import * as React from "react"

import {
  get_syntax_error as getSyntaxError,
  get_tree as getTree
} from "wasmy_flux"

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
    let err = getSyntaxError(scriptInput)
    let ast = JSON.parse(getTree(scriptInput))

    if (err === "") {
      err = "No syntax errors—nice job!"
    }

    this.props.onError({ message: err })
    this.props.onAST(ast)
  }

  render() {
    return (
      <form onSubmit={this.parse}>
        <textarea
          value={this.state.scriptInput}
          rows={4}
          onChange={this.updateScript}
        />
        <button type="submit">Parse!</button>
      </form>
    )
  }
}

export default InputBox
