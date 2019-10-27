const routes = require('next-routes');

module.exports = routes()
  .add('/', 'index')
  .add('article', '/article/:id')
  .add('search', '/search');
