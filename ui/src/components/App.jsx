import * as React from "react"
import InputBox from "./InputBox.jsx"
import Error from "./Error.jsx"
import ASTViz from "./ASTViz.jsx"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      errorMessage: "",
      data: []
    }
  }

  render() {
    return (
      <div className="app">
        <InputBox
          onError={this.handleError}
          onResults={this.handleResults}
          onAST={this.handleAST}
        />
        <Error message={this.state.errorMessage} />
        <ASTViz key={Date.now()} ast={this.state.ast} />
      </div>
    )
  }

  handleError = error => {
    this.setState({ errorMessage: error.message })
  }

  handleResults = results => {
    this.setState({ data: results })
  }

  handleAST = ast => {
    this.setState({ ast })
  }
}

export default App
