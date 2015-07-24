var dbpath = require('../');
var fs = require('fs');
var assert = require('assert');

describe('mongodb-dbpath', function() {
  it('should world', function(done) {
    dbpath('mongodb-dbpath-test', function(err, res) {
      if (err) return done(err);
      fs.exists(res, function(exists) {
        assert(exists, 'dbpath directory should be writable and exist');
        done();
      });
    });
  });
});
