import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
    name : 'PostInput',
    fields : {
        _id : {type : GraphQLID},
        title : {type : new GraphQLNonNull(GraphQLString)},
        description : {type : new GraphQLNonNull(GraphQLString)},
    }
});