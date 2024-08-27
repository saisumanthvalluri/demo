import { create } from "zustand";
import { getuserDTOFromLS, setUserToLS } from "../utils/user";

export const useAuthStore = create((set) => ({
    user: getuserDTOFromLS(), // Load from local storage,
    setUser: (userData) => {
        setUserToLS(userData);
        set({ user: userData });
    },
    clearUser: () => {
        setUserToLS(null);
        set({ user: null });
    },
}));

export default useAuthStore;
