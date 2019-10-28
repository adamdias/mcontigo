const express = require('express');
const next = require('next');
const path = require('path');
const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  express()
    .use('/public', express.static(path.resolve(__dirname, 'public')))
    .use(handler)
    .listen(9045);
});
