import {
  Context,
  useUserFactory,
  UseUserFactoryParams,
} from '@vue-storefront/core';
import type { User } from '@propeller-commerce/propeller-api';
import type {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams,
} from '../types';

const params: UseUserFactoryParams<User, UpdateParams, RegisterParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    return {} as unknown as User;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logOut: async (context: Context) => {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, { currentUser, updatedUserData }) => {
    console.log('Mocked: useUser.updateUser');
    return {} as unknown as User;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async (
    context: Context,
    { email, password, firstName, lastName }
  ) => {
    console.log('Mocked: useUser.register');
    return {} as unknown as User;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async (context: Context, { username, password }) => {
    console.log('Mocked: useUser.logIn');
    return {} as unknown as User;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (
    context: Context,
    { currentUser, currentPassword, newPassword }
  ) => {
    console.log('Mocked: useUser.changePassword');
    return {} as unknown as User;
  },
};

export const useUser = useUserFactory<User, UpdateParams, RegisterParams>(
  params
);
