const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql

const users = [
    { id: '23', firstName: 'aaa', age: 21 },
    { id: '24', firstName: 'bbb', age: 22 }
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                // Go to database and find user with id
                return users.find(x => x.id == args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})