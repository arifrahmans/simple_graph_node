import {
    GraphQLBoolean
  } from 'graphql';
  
  import PostModel from '../../../models/post';
  
  export default {
    type: GraphQLBoolean,
    resolve (root, params, options) {
      return PostModel
        .remove()
        .exec();
    }
  };
  