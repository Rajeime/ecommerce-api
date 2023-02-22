const app = require("./app").app;
const config = require("./config/config").port;

//<------- Start Express App ------->
const server = app.listen(config.port, () => {
  console.log(`Server listening on http://localhost:${config}`);
});

module.exports = server;
