#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const config = require('../src/components/Icon/selection.json')

// import config from '../src/components/Icon/selection.json'

const IconNamesString = config.icons
  .map(v => `"${v.properties.name}"`)
  .join(' | ')

// Define the TypeScript code with some example types
const tsCode = `
// Icon name types
export type IconName = ${IconNamesString}
`

// Specify the file path and name
const filePath = './src/components/Icon/types.ts'

// Write the TypeScript code to the file
fs.writeFile(filePath, tsCode, err => {
  if (err) {
    console.error(`Error writing file: ${err}`)
  } else {
    console.log(`Icon types has been created successfully.`)
  }
})
