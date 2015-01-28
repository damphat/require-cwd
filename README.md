require-cwd [![Build Status](https://travis-ci.org/damphat/require-cwd.png?branch=master)](https://travis-ci.org/damphat/require-cwd)
===========

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/damphat/require-cwd?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
