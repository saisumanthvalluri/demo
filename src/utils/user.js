export const getuserDTOFromLS = () => {
    const userDto = localStorage.getItem("userDto");
    return userDto ? JSON.parse(userDto) : null;
};
