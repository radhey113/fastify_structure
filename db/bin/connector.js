const fastifyPlugin = require('fastify-plugin');
async function dbConnector (_fastify, _options) {
    _fastify.register(require('fastify-mongodb'), {
        forceClose: true,
        url: _fastify.config.connection,
        name: 'testdb'
    })
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector);
