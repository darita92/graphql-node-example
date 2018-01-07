const graphqlHTTP = require('express-graphql');
const schema = require('../schemas');
const UserController  = require('../controllers').user;

module.exports = (app) => {
    const handler = {
        users: () => {
            return new UserController();
        }
    };
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true,
        rootValue: handler
    }));
};