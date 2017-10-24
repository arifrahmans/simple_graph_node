import {
    GraphQLBoolean
  } from 'graphql';
  
  import UserModel from '../../../models/user';
  
  export default {
    type: GraphQLBoolean,
    resolve (root, params, options) {
      return UserModel
        .remove()
        .exec();
    }
  };
  