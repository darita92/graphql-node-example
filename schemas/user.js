const graphql = require('graphql');

const { 
    GraphQLList, GraphQLObjectType, GraphQLString,
} = require('graphql');
const { GraphQLMixed } = require('./common');

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User data information',
    fields: {
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString}
    }
});

const UsersQueryType = new GraphQLObjectType({
    name: 'Users',
    description: 'User data information',
    fields: {
        findAll: {type: new GraphQLList(UserType)}
    }
});
/*
const UserMutationType = new GraphQLObjectType({
    name: 'UserMutation',
    description: 'User data manipulation',
    fields: {
        create: {type: new GraphQLList(ClassType)}
    }
});
*/
//module.exports.UserQueryType = UserQueryType;
module.exports.UsersQueryType = UsersQueryType;
//module.exports.UserMutationType = UserMutationType;