import { create } from "zustand";

export const useApplicationStore = create((set) => ({
    selectedJob: JSON.parse(localStorage.getItem("selectedJob")) || {}, // Load from local storage
    admitCardDelivery: JSON.parse(localStorage.getItem("admitCard")) || false,
    setSelectedJob: (data) => {
        localStorage.setItem("selectedJob", JSON.stringify(data)); // Save to local storage
        set({ selectedJob: data });
    },
    resetSelectedJob: () => {
        localStorage.removeItem("selectedJob"); // Remove from local storage
        set({ selectedJob: {} });
    },
    setAdmitCardDelivery: (val) => {
        localStorage.setItem("admitCard", JSON.stringify(val)); // Save to local storage
        set({ selectedJob: val });
    },
    removeAdmitCardDelivery: () => {
        localStorage.removeItem("admitCard"); // Remove from local storage
        set({ admitCard: false });
    },
}));

export default useApplicationStore;
