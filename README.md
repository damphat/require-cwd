require-cwd [![Build Status](https://travis-ci.org/damphat/require-cwd.png?branch=master)](https://travis-ci.org/damphat/require-cwd)
===========

Load locally-installed packages from a globally-installed package

Install
-----------
```
npm install require-cwd
```

Usage
-----------
```
// FILE: global-tool.js

var require_cwd = require('require-cwd');

// load express package from current working dir (instead of global tool 's dir)
var express = require_cwd('express');

```
