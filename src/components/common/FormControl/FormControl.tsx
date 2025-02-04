import React from 'react';
import { WrappedFieldProps } from 'redux-form/lib/Field'

import styles from './FormControl.module.css';

export const Input: React.FC<WrappedFieldProps & { placeholder: string | undefined }> = ({ input, meta, placeholder, ...props }) => {
    const isError = meta.error && meta.touched;

    return (
        <div className={styles.formControl}>
            <input {...input} placeholder={placeholder} className={isError ? styles.error : ''} />
            {isError ? <span>{meta.error}</span> : null}
        </div>
    );
};

export const Textarea: React.FC<WrappedFieldProps & { placeholder: string | undefined }> = ({ input, meta, placeholder, ...props }) => {
    const isError = meta.error && meta.touched;

    return (
        <div className={styles.formControl}>
            <textarea {...input} placeholder={placeholder} className={isError ? styles.error : ''} />
            {isError ? <span>{meta.error}</span> : null}
        </div>
    );
};