const graphql = require('graphql');

const { GraphQLScalarType } = require('graphql');

module.exports.GraphQLMixed = new GraphQLScalarType({
  name: 'Mixed',
  description: 'Generic Type for any JSON object',
  serialize: value => value,
  parseValue: value => value,
  parseLiteral: ast => ast.value
});