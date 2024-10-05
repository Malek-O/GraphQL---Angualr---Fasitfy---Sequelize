const Fastify = require('fastify');
const mercurius = require('mercurius');
const typeDefs = require('./graphql/schema.js');
const resolvers = require('./graphql/resolvers.js');
const db = require("./models")
const cors = require('@fastify/cors'); 

const app = Fastify({ logger: true });

app.register(cors, {
    origin: '*', 
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
});

app.register(mercurius, {
    schema: typeDefs,
    resolvers: resolvers,
    graphiql: true/* ,
    errorFormatter: (error) => {
        return {
            response:{
                data:null,
                errors: [
                    {
                        message:"Error 500",
                    }
                ]
            },
            statusCode: 500
        }
    } */
});

const start = async () => {
    try {
        await db.sequelize.sync()
        await app.listen({ port: 3000 });
        console.log('Server running on http://localhost:3000');
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
