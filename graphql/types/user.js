import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLObjectType({
    name : 'User',
    fields : {
        _id : {type : GraphQLID},
        name : {type : new GraphQLNonNull(GraphQLString)},
        password : {type : new GraphQLNonNull(GraphQLString)},
        email : {type : GraphQLString},
    }
});