export const getuserDTOFromLS = () => {
    const userDto = localStorage.getItem("userDTO");
    return userDto ? JSON.parse(userDto) : null;
};

export const setUserToLS = (userData) => {
    localStorage.setItem("userDTO", JSON.stringify(userData));
};

export const getSelectedAdmitCardStatus = () => {
    return JSON.parse(localStorage.getItem("formData"))?.admitCardDelivery || "No";
};

export const getApplicationType = () => {
    return JSON.parse(localStorage.getItem("formData"))?.appType || "general";
};
