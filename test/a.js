var requireCwd = require('../');

describe('require-cwd', function(){
  it('should be a function', function(done){
    console.log('log:', typeof requireCwd);
    if(typeof requireCwd === 'function') {
      done();
    } else {
      done(true);
    }
  })

  it('should throw error when package not found', function(done){
    try {
      requireCwd('nonExistName');
      done(false);
    } catch(e) {
      done();
    }
  })

  it('return same with "require" when call from local', function(done){
    if(require('resolve') === requireCwd('resolve')) {
      done();
    } else {
      done('not the same with local');
    }
  })

  it('require from current directory', function(done){
    process.chdir('test');

    try {
      if(requireCwd('my-module').foo() === 'I am foo') {
        done()
      } else {
        done('');
      }
    } finally {
      process.chdir('..');
    }
  })
})
