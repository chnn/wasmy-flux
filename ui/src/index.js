import * as wasm from "wasmy_flux";

const QUERY = `from db("telegraf"  |> range(start: -1m) |> filter(fn: (r) => r._measurement == "m")`;

console.log(wasm.parse_query(QUERY));
