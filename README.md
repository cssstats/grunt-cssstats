# grunt-cssstats [![Build Status](https://travis-ci.org/johnotander/grunt-cssstats.svg?branch=master)](https://travis-ci.org/johnotander/grunt-cssstats)

> A grunt plugin to get [CSS statistics](https://github.com/jxnblk/css-statistics) for your project.

## Getting Started

This plugin requires Grunt and is a wrapper for <https://github.com/jxnblk/css-statistics>.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssstats --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssstats');
```

## The "cssstats" task

### Overview
In your project's Gruntfile, add a section named `cssstats` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssstats: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      ['output/css-statistics.json'],
    },
  },
});
```

### Options

#### options.safe

Type: `Boolean`, Default value: `false`

Turns on [PostCSS' safe mode](https://github.com/postcss/postcss#safe-mode).

### Usage Examples

#### Default Options

In this example, the default options won't be able to handle invalid CSS. So, if a source file
contains invalid CSS, an error will be raised.

```js
grunt.initConfig({
  cssstats: {
    options: {},
    files: {
      'output/css-stats.json': ['path/to/your.css'],
    },
  },
});
```

#### Custom Options

In order to handle invalid CSS, you can set `options.safe` to `true`. This will turn on
[PostCSS' safe mode](https://github.com/postcss/postcss#safe-mode).

```js
grunt.initConfig({
  cssstats: {
    options: {
      safe: true
    },
    files: {
      'output/css-stats.json': ['path/to/your.css'],
    },
  },
});
```

## License

MIT

## Thanks to the following

* <https://github.com/jxnblk/css-statistics>

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
