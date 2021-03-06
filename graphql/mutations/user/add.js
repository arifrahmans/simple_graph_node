import {
    GraphQLNonNull,
    GraphQLBoolean
  } from 'graphql';
  
  import userInputType from '../../types/user_input';
  import UserModel from '../../../models/user';
  
  export default {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(userInputType)
      }
    },
    async resolve (root, params, options) {
      const userModel = new UserModel(params.data);
      const newUser = await userModel.save();
  
      if (!newUser) {
        throw new Error('Error adding new user');
      }
      return true;
    }
  };
  