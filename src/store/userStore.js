import { create } from 'zustand';

export const useUserStore = create((set) => ({
  username: '',
  password: '',

  login: () =>
    set(() => ({
      username: 'admin',
      password: 'admin',
    })),
  logout: () =>
    set({
      username: '',
      password: '',
    }),
}));
