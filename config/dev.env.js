'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TEST_BASE_API1: '"test1-api"',
  TEST_BASE_API2: '"test2-api"'
})
