import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
    name : 'UserInput',
    fields : {
        _id : {type : GraphQLID},
        name : {type : new GraphQLNonNull(GraphQLString)},
        password : {type : new GraphQLNonNull(GraphQLString)},
        email : {type : new GraphQLNonNull(GraphQLString)},
    }
});