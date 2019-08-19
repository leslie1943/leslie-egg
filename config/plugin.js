'use strict';

const path = require('path');

// had enabled by egg
// exports.static = true;
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.ua = {
  enable: true,
  // path: path.join(__dirname, '../lib/plugin/egg-ua')
  package: 'egg-plugin-ua',
};
