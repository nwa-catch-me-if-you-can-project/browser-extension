/* eslint-disable no-console */
/* eslint-env node */

'use strict';

const { parallel, watch } = require('gulp');
const { exec } = require('child_process');

function build(cb) {
  exec('make build', (error, stdout, stderr) => {
    console.error(stderr);
    console.log(stdout);
    cb(error);
  });
}

function watchClient() {
  watch('node_modules/hypothesis', { events: 'all' }, build);
}

function watchSrc() {
  watch('src', { events: 'all' }, build);
}

exports.watch = parallel(build, watchClient, watchSrc);
