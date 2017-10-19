import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
    name : 'Comment',
    fields : {
        _id : {type : GraphQLID},
        postId : {type : new GraphQLNonNull(GraphQLID)},
        userId : {type : new GraphQLNonNull(GraphQLID)},
        message : {type : GraphQLString},
    }
});