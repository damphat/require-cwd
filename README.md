## require-cwd

[![Build Status](https://travis-ci.org/damphat/require-cwd.png?branch=master)](https://travis-ci.org/damphat/require-cwd)
![Node.js CI](https://github.com/damphat/require-cwd/workflows/Node.js%20CI/badge.svg)

Load locally-installed packages from a globally-installed package

## Install
```
npm install require-cwd
```

## Usage
```js
// FILE: global-tool.js

var require_cwd = require('require-cwd');

// load express package from current working dir (instead of global tool 's dir)
var express = require_cwd('express');

```
