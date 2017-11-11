#!/usr/bin/env node

const getNode = (name, childCount, row) => {
  const children = []
  let i = 0
  if (row > 0) {
    for (; i < childCount; i++) {
      const childName = name + '.' + i
      const grandChildCount = childCount
      children.push(getNode(childName, grandChildCount, row - 1))
    }
  }
  return {
    name,
    children,
  }
}

const getNodeCountInRow = (base, depth) => Math.pow(base, depth - 1)

export const getNodeProjection = (base, depth) => {
  let count = 0
  for (let i = 0; i < depth; i++) {
    count += getNodeCountInRow(base, i + 1)
  }
  return count
}

export default (base, rows) => {
  // console.log('Generating Codebase...')
  return getNode('0', base, rows)
}
