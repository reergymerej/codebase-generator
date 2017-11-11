#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import * as app from './index'
import template from 'lodash.template'
import mkdirp from 'mkdirp'

console.log('Generating Codebase...')

const base = 5
const depth = 3
const tree = app.getTree(base, depth)

let dirCount = 0
app.iterateTree(tree, (node) => {
  const filepath = path.join('out', node.name)
  mkdirp.sync(filepath)
  dirCount++
})

console.log(dirCount)
// const t = template('', {})
// console.log(t)
