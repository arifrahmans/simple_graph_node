import {
    GraphQLNonNull,
    GraphQLID
  } from 'graphql';
  
  import postType from '../../types/post';
  import getProjection from '../../get-projection';
  import PostModel from '../../../models/post';
  
  export default {
    type: postType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve (root, params, options) {
      const projection = getProjection(options.fieldASTs[0]);
      const removedPost = await PostModel
        .findByIdAndRemove(params._id, {
          select: projection
        })
        .exec();
  
      if (!removedPost) {
        throw new Error('Error removing blog post');
      }
  
      return removedPost;
    }
  };
  