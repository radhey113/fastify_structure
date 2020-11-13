module.exports = async (_fastify) => {
    _fastify.get("/test", async function (request, reply) {
        const User = this.mongo.testdb.db.collection('users');
        return {message: "Success message!"};
    });
};
