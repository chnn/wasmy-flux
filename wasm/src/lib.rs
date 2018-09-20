extern crate wasm_bindgen;

extern crate pest;

#[macro_use]
extern crate pest_derive;

#[macro_use]
extern crate serde_derive;

extern crate serde;
extern crate serde_json;

use pest::Parser;
use pest::iterators::Pair;
use wasm_bindgen::prelude::*;

const MAX_NAME_LENGTH: usize = 80;

#[derive(Parser)]
#[grammar = "flux.pest"]
struct IdentParser;

#[wasm_bindgen]
pub fn get_syntax_error(query: &str) -> String  {
    let result = IdentParser::parse(Rule::Start, query);

    match result {
        Ok(_) => "".to_string(),
        Err(e) => format!("{}", e)
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Node {
    name: String,
    children: Vec<Node>,
}

impl Node {
    fn new(name: String, children: Vec<Node>) -> Node {
        return Node {
            name,
            children
        }
    }
}


#[wasm_bindgen]
pub fn get_tree(query: &str) -> String {
    let result = IdentParser::parse(Rule::Start, query);
    let mut nodes: Vec<Node> = Vec::new();

    if result.is_err() {
        return "[]".to_string()
    }

    let pairs = result.unwrap();

    for pair in pairs {
        let node = Node::new(pair_name(&pair), collect_children(pair));

        nodes.push(node);
    }

    serde_json::to_string(&nodes[0]).unwrap()
}

fn collect_children(pair: Pair<'_, Rule>) -> Vec<Node> {
    let mut children: Vec<Node> = Vec::new();

    for inner_pair in pair.into_inner() {
        let node = Node::new(pair_name(&inner_pair), collect_children(inner_pair));

        children.push(node);
    }

    children
}

fn pair_name(pair: &Pair<'_, Rule>) -> String {
    let text = pair.clone().into_span().as_str();

    let new_text = if text.len() > MAX_NAME_LENGTH {
        format!("{}...", &text[..MAX_NAME_LENGTH])
    } else {
        String::from(text)
    };
    
    format!("{:?} [{}]", pair.as_rule(), new_text)
}
