### To run the demo

1. Install Node and Yarn
1. `cd wasm/pkg`
1. `yarn link`
1. `cd ../../ui`
1. `yarn link "wasmy_flux"`
1. `yarn install`
1. `yarn start`

### To rebuild the WASM module 

The WASM module is built from the source in `wasm/src/lib.rs`. To recompile the WASM module:

1. Install the latest stable release of Rust via `rustup`
1. Install `wasm-pack` by running `cargo install wasm-pack`
1. In the `wasm` directory, run `wasm-pack init`

Refresh the UI, and it should load the freshly built WASM modules.


