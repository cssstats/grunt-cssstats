/*
 * grunt-cssstats
 * https://github.com/johnotander/grunt-cssstats
 *
 * Copyright (c) 2015 John Otander
 * Licensed under the MIT license.
 */

'use strict';

var cssstats = require('cssstats');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('cssstats', 'Get CSS statistics for your project.', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      safe: false
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      });

      // Write the destination file.

      var results = cssstats(src.toString(), options);
      var results = JSON.stringify(results, undefined, 2);
      grunt.file.write(file.dest, results);

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });
};
