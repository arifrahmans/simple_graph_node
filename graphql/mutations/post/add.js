import {
    GraphQLNonNull,
    GraphQLBoolean
  } from 'graphql';
  
  import postInputType from '../../types/post_input';
  import PostModel from '../../../models/post';
  
  export default {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(postInputType)
      }
    },
    async resolve (root, params, options) {
      const postModel = new PostModel(params.data);
      const newPost = await postModel.save();
  
      if (!newPost) {
        throw new Error('Error adding new post');
      }
      return true;
    }
  };
  