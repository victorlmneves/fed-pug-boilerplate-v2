'use strict'

import gulp from 'gulp'
import { args, config, taskTarget, browserSync } from '../utils'

// BrowserSync
gulp.task('browserSync', () => {
  return browserSync.init({
    open: args.open ? 'local' : false,
    startPath: config.baseUrl,
    port: config.port || 9000,
    server: {
      baseDir: taskTarget,
      routes: (() => {
        let routes = {}

        // Map base URL to routes
        routes[config.baseUrl] = taskTarget

        return routes
      })()
    }
  })
})
