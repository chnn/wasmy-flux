import React from "react"
import { render } from "react-dom"

import App from "./components/App.jsx"

import { parse_query as parseQuery } from "wasmy_flux"

console.log(parseQuery("from(db: asdf "))

render(<App />, document.querySelector("#root"))
