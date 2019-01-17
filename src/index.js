const fs = require('fs')
const path = require('path')
const meta = require('../package.json')

/** This really does nothing right now. Just create a stylesheet w/ plant's meta */
fs.writeFile(
  path.join(path.dirname(__dirname), 'plant.css'),
  `/*! plant.css v${meta.version} */`,
  error => error ? console.error(error) : console.log('🌱 css planted')
)
