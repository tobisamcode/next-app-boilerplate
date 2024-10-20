import { StateCreator } from "zustand";

export interface UserState {
  user: string | null;
  setUser: (user: string) => void;
}

export type UserSlice = UserState;

export const createUserSlice: StateCreator<UserState, [], [], UserSlice> = (
  set
) => ({
  user: null,
  setUser: (user) => set({ user }),
});
