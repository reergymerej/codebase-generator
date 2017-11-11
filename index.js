#!/usr/bin/env node

export default (base, rows) => {
  console.log('Generating Codebase...')

  let row = 0
  for (; row < rows; row++) {
    let nodes = []
    const nodesInRow = Math.pow(base, row)
    let nodeIndex = 0
    for (; nodeIndex < nodesInRow; nodeIndex++) {
      nodes.push(0)
    }
  }

  return {
    name: '0',
    nodes: [
      {
        name: '0.0',
        nodes: [
          {
            name: '0.0.0',
            nodes: [],
          },
        ],
      },
    ],
  }
}
