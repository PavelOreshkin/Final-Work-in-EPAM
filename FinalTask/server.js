const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, './bd/movies.json'));
const middlewares = jsonServer.defaults();


server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);
server.listen(8080, () => {
  console.log('JSON Server is running')
});