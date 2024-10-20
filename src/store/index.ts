import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserSlice, createUserSlice } from "./slices/user-slice";

interface RootState extends UserSlice {}

// Combine multiple slices into a single store
// export const useStore = create<RootState>((...set) => ({
//   ...createUserSlice(...set),
// }));

export const useStore = create<RootState>()(
  devtools(
    persist(
      (...set) => ({
        ...createUserSlice(...set),
      }),
      { name: "app-store" }
    )
  )
);
