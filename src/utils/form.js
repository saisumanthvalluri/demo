export const getRespectiveFormData = (fields) => {
    const fieldNames = fields.map((field) => field.name);
    const formData = JSON.parse(localStorage.getItem("formData"));

    // Create a new object with only the keys present in fieldNames
    const filteredData = Object?.keys(formData)
        ?.filter((key) => fieldNames?.includes(key))
        ?.reduce((obj, key) => {
            obj[key] = formData[key];
            return obj;
        }, {});

    return filteredData;
};

export const validateFormData = (filteredData, fields) => {
    const errors = {};

    // Iterate through the fields to validate the filteredData
    fields.forEach((field) => {
        const { name, required, type } = field;

        // Check if the field is required and if the corresponding data is empty or missing
        if (required && (!filteredData[name] || filteredData[name].trim() === "") && type !== "line") {
            errors[name] = `${field.label} is required.`;
        }
    });

    return errors;
};
