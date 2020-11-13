const fastifyEnv = require('fastify-env');
let config = {
    ...require("./bin/db"),
    ...require("./bin/server")
};
const schema = {
    type: 'object',
    required: ['port', "connection"],
    properties: config
};
const options = {
    confKey: 'config', // optional, default: 'config'
    schema: schema,
    data: process.env // optional, default: process.env
};

module.exports = async (_fastify) => {
    return _fastify.register(fastifyEnv, options).ready((err) => {
        if (err) console.error(err);
        _fastify.log.info(_fastify.config);
    });
};
