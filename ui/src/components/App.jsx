import * as React from "react"
import InputBox from "./InputBox.jsx"
import Error from "./Error.jsx"
import DataDisplay from "./DataDisplay.jsx"

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
      <>
        <InputBox onError={this.handleError} onResults={this.handleResults} />
        <Error message={this.state.errorMessage} />
        <DataDisplay data={this.state.data} />
      </>
    )
  }

  handleError = error => {
    this.setState({ errorMessage: error.message })
  }

  handleResults = results => {
    this.setState({ data: results })
  }
}

export default App
