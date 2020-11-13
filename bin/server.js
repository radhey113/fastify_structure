// Require the framework and instantiate it
const fastify = require('fastify')({logger: true});

module.exports = async () => {
    await require("../config")(fastify);
    await fastify.register(require('../db'));
    await fastify.register(require("../routes"));

    // Run the server!
    fastify.listen(fastify.config.port, function (err, address) {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }
        fastify.log.info(`server listening on ${address}`);
    });
};

