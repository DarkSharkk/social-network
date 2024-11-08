export const required = (value) => {
    return value ? undefined : "Field is required";
};

export const maxLengthCreator = (length) => (value) => {
    return value && value.length < length ? undefined : `Field should be no more than ${length} symbols`;
};
