import * as React from "react";

import { parse_query } from "../../wasm/src/lib.rs";

const QUERY = `from db("telegraf") |> range(start: -1m) |> filter(fn: (r) => r._measurement == "m")`;

export default function App() {
  console.log(parse_query(QUERY));

  return null;
}
