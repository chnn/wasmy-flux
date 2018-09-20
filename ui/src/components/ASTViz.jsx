import * as React from "react"
import * as d3 from "d3"

const HEIGHT = 400
const WIDTH = 8000

class ASTViz extends React.Component {
  constructor(props) {
    super(props)

    this.svgRef = React.createRef()
  }

  componentDidMount() {
    const { ast } = this.props

    if (!ast) {
      return
    }

    const svg = d3.select(this.svgRef.current)
    const g = svg.append("g").attr("transform", "translate(40,0)")
    const root = d3.hierarchy(ast)

    const tree = d3.tree().size([HEIGHT, WIDTH - 160])

    const linker = d3
      .linkHorizontal()
      .x(d => d.y)
      .y(d => d.x)

    const link = g
      .selectAll(".link")
      .data(tree(root).links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", linker)

    const node = g
      .selectAll(".node")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("class", function(d) {
        return "node" + (d.children ? " node--internal" : " node--leaf")
      })
      .attr("transform", function(d) {
        return "translate(" + d.y + "," + d.x + ")"
      })

    node.append("circle").attr("r", 2.5)

    node
      .append("text")
      .attr("dy", d => (d.children ? -15 : 3))
      .attr("x", function(d) {
        return d.children ? -8 : 8
      })
      .style("text-anchor", d => {
        if (!d.parent || !d.children) {
          return "start"
        }

        return "middle"
      })
      .text(d => d.data.name)
  }

  render() {
    return (
      <div className="ast-viz">
        <svg ref={this.svgRef} width={WIDTH} height={HEIGHT} />
      </div>
    )
  }
}

export default ASTViz
