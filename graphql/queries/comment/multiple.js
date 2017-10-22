import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import commentType from '../../types/comment';
import getProjection from '../../get-projection';
import commentModel from '../../../models/comment';

export default {
    type : new GraphQLList(commentType),
    args : {
        postId : {
            name : 'postId',
            type : new GraphQLNonNull
        }
    },
    resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return commentModel.find({
            postId : params.postId
        }).select(projection).exec();
    }
};