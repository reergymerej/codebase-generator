#!/usr/bin/env node

import fs from 'fs'
import * as app from './index'
import template from 'lodash.template'
import mkdirp from 'mkdirp'

console.log('Generating Codebase...')

const base = 5
const depth = 2
const tree = app.getTree(base, depth)

app.iterateTree(tree, (node) => {
  console.log(node.name)
})

// const t = template('', {})
// console.log(t)
