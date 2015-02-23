// Templating Extension
var handlebars = require('handlebars');

handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
  if (arguments.length < 3)
    throw new Error("Handlebars helper 'equal' needs 2 parameters");
  if( lvalue!=rvalue ) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});
