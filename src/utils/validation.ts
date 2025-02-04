type ValidatorType = (val: string) => string | undefined;

export const required: ValidatorType = (value) => {
    return value ? undefined : "Field is required";
};

export const maxLengthCreator = (length: number): ValidatorType => (value) => {
    return value && value.length < length ? undefined : `Field should be no more than ${length} symbols`;
};
