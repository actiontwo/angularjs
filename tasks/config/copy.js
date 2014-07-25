/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function (grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [
        {
          expand: true,
          cwd: './assets',
          src: ['**/*.!(coffee|less)'],
          dest: '.tmp/public'
        },
        {
          expand: true,
          cwd: './bower_components',
          src: ['angular/angular.min.js',
            'angular/angular.min.js.map',
            'angular-route/angular-route.min.js',
            'angular-route/angular-route.min.js.map',
            'jquery/dist/jquery.min.js',
            'jquery/dist/jquery.min.map',
            'bootstrap/dist/js/bootstrap.min.js',
            'jquery-ui/ui/jquery-ui.js',
            'noty/js/noty/packaged/jquery.noty.packaged.min.js',
            'angular-ui-calendar/src/calendar.js',
            'fullcalendar/fullcalendar.min.js'
          ],
          flatten: true,
          dest: '.tmp/public/js/dependencies'
        },
        {
          expand: true,
          cwd: './bower_components',
          src: ['bootstrap/dist/css/bootstrap.min.css',
            'bootstrap/dist/css/bootstrap-theme.min.css',
            'font-awesome/css/font-awesome.min.css',
            'fullcalendar/fullcalendar.css'],
          flatten: true,
          dest: '.tmp/public/styles'
        },
        {
          expand: true,
          cwd: './bower_components/bootstrap/fonts',
          src: ['**/*'],
          flatten: true,
          dest: '.tmp/public/fonts'
        },
        {
          expand: true,
          cwd: './bower_components/font-awesome/fonts',
          src: ['**/*'],
          flatten: true,
          dest: '.tmp/public/fonts'
        }]
    },
    build: {
      files: [
        {
          expand: true,
          cwd: '.tmp/public',
          src: ['**/*'],
          dest: 'www'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
