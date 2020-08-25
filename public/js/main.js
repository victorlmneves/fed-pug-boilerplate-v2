// Main javascript entry point
// Should handle bootstrapping/starting application
'use strict'

import { currentRoute } from './lib/_currentRoute.js'

(() => {
  currentRoute()
})()