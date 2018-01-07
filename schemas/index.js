const graphql = require('graphql');
const userType = require('./user');

const query = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        users: {
            type: userType.UsersQueryType,
        }
    }
});

/*
const mutation = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        user: { type: userType.UserMutationType }
    }
});
*/

module.exports = new graphql.GraphQLSchema({
    query: query
});