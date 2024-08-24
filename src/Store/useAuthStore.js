import { create } from "zustand";
import { getuserDTOFromLS } from "../utils/user";

export const useAuthStore = create((set) => ({
    user: getuserDTOFromLS(), // Load from local storage,
    setUser: (userData) => {
        localStorage.setItem("userDTO", JSON.stringify(userData));
        set({ user: userData });
    },
    clearUser: () => set({ user: null }),
}));

export default useAuthStore;
