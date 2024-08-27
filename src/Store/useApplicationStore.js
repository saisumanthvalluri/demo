import { create } from "zustand";

export const useApplicationStore = create((set) => ({
    selectedJob: JSON.parse(localStorage.getItem("selectedJob")) || {}, // Load from local storage
    admitCardDelivery: JSON.parse(localStorage.getItem("formData"))?.admitCardDelivery || "No",

    setSelectedJob: (data) => {
        localStorage.setItem("selectedJob", JSON.stringify(data)); // Save to local storage
        set({ selectedJob: data });
    },
    resetSelectedJob: () => {
        localStorage.removeItem("selectedJob"); // Remove from local storage
        set({ selectedJob: {} });
    },
    setAdmitCardDelivery: (val) => {
        set({ selectedJob: val });
    },
    // removeAdmitCardDelivery: () => {
    //     localStorage.removeItem("admitCard"); // Remove from local storage
    //     set({ admitCard: false });
    // },
}));

export default useApplicationStore;
