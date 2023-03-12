const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5002,
    host: "localhost",
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server is running on ${server.info.uri}`);
};

init();
