'use strict';

var passport = require('passport'),
  TwitterTokenStrategy = require('passport-twitter-token'),
  User = require('mongoose').model('User');

module.exports = function () {

  passport.use(new TwitterTokenStrategy({
      consumerKey: 'ShUIcTR3HB1xs4npi1M3SvT3N',
      consumerSecret: '8IpogPtqBC0zScvGtLnY3p1rTiFFh73SOoPIZnyglo7n9wAdhB',
      includeEmail: true
    },
    function (token, tokenSecret, profile, done) {
      User.upsertTwitterUser(token, tokenSecret, profile, function(err, user) {
        return done(err, user);
      });
    }));

};
