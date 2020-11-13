module.exports = async (_fastify, _options) => {
  require("./bin/routes")(_fastify);
};
