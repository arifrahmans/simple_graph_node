import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLObjectType({
    name : 'Comment',
    fields : {
        _id : {type : new GraphQLNonNull(GraphQLID)},
        postId : {type : new GraphQLNonNull(GraphQLID)},
        userId : {type : new GraphQLNonNull(GraphQLID)},
        message : {type : GraphQLString},
    }
});