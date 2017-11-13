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
        userId : {type : new GraphQLNonNull(GraphQLID)},
        title : {type : new GraphQLNonNull(GraphQLString)},
        description : {type : new GraphQLNonNull(GraphQLString)},
    }
});