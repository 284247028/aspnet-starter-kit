/**
 * ASP.NET Core Starter Kit
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const path = require('path');
const del = require('del');
const task = require('./lib/task');

module.exports = task('clean', Promise.resolve()
  .then(() => del(
    ['main.*.js', 'main.*.js.map'], { dot: true, cwd: path.resolve(__dirname, '../') }
  ))
);
