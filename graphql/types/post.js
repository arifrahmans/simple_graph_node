import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLObjectType({
    name : 'Post',
    fields : {
        _id : {type : GraphQLID},
        title : {type : new GraphQLNonNull(GraphQLString)},
        description : {type : GraphQLString},
    }
});