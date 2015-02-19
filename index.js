/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-mock-socket',

  included: function (app) {
    if (app.tests) {
      app.import('bower_components/mock-socket/dist/mock-socket.js', {
        type: 'test'
      });
    }
  }
};
