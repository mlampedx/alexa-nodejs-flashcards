const AlexaAppServer = require('alexa-app-server');
const server = new AlexaAppServer();

server.start({
  server_root: __dirname,
  public_html: 'static_assets',
  app_dir: 'app',
  app_root: '/alexa/',
  port: 8080,
  preRequest: ((json, req, res) => {
    return false;
  }),
  debug: true,
});

module.exports = server;
