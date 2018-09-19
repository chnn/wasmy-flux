extern crate pest;
#[macro_use]
extern crate pest_derive;
extern crate wasm_bindgen;

use pest::Parser;
use wasm_bindgen::prelude::*;

// #[cfg(debug_assertions)]
// const _GRAMMAR: &'static str = include_str!("flux.pest");

#[derive(Parser)]
#[grammar = "flux.pest"]
struct IdentParser;

#[wasm_bindgen]
pub fn parse_query(query: &str) -> String  {
    let result = IdentParser::parse(Rule::Start, query);

    match result {
        Ok(_) => "".to_string(),
        Err(e) => format!("{}", e)
    }
}
