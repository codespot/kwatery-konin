#!/usr/bin/env node

var express = require('express');
var port = process.env.PORT | 3000;
var app = express();
var session = require('express-session');
var _ = require('underscore');

var variables = {
  phone: '791 781 646',
  email: 'rezerwacja@kwatery-konin.pl'
};

var queries = {
  kramsk: ' - 5km od Kramska'
};

app.set('views', 'views');
app.set('view engine', 'jade');
app.use(session({secret: 'secretty-secret', cookie: {maxAge: 60000}}));

app.use(express.static('public'));

var actions = [
  {route: '/', template: 'index'},
  {route: '/pokoje', template: 'rooms'},
  {route: '/kontakt', template: 'contact'}
];

actions.forEach(function(action) {
  app.get(action.route, function(req, res) {
    var localVariables = _.extend({}, variables, action.variables);

    if (req.query.source) {
      req.session.source = req.query.source;
    }

    var slogan = queries[req.session.source];
    if (slogan) {
      localVariables.slogan = slogan;
    }

    return res.render(action.template, localVariables);
  });
});

app.listen(port);

console.log('Listening on port ' + port);
