#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import * as app from './index'
import template from 'lodash.template'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'

const templateSource = fs.readFileSync('one.template.js', 'utf8')

console.log('Generating Codebase...')

rimraf.sync('out/')

const base = 5
const depth = 1
console.log(`file tree depth: ${depth}`)
console.log(`files per node: ${base}`)

const tree = app.getTree(base, depth)
const compiled = template(templateSource, {})

const createFileSource = (options) => {
  const importFiles = []
  for (let i = 0; i < base; i++) {
    importFiles.push(i)
  }
  const imports = options.isLeaf
    ? []
    : importFiles
  const source = compiled({
    filename: options.filename,
    imports,
    filesPerDir: options.filesPerDir,
  })
  return source
}

let fileCount = 0
const saveFile = (filename, src) => {
  fs.writeFileSync(filename, src)
}

let dirCount = 0
app.iterateTree(tree, (node) => {
  const filepath = path.join('out', node.name)
  mkdirp.sync(filepath)
  dirCount++

  const filename = filepath === 'out/'
    ? 'out/index.js'
    : filepath + '/index.js'

  const source = createFileSource({
    filename,
    filesPerDir: base,
    isLeaf: node.isLeaf,
  })

  saveFile(filename, source)
  fileCount++
})

console.log(`created ${dirCount} directories...`)
console.log(`created ${fileCount} files...`)
