import React, { useEffect, useState } from "react";

import styles from './Status.module.css';

export const Status = (props) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const onStatusChange = (e) => setStatus(e.currentTarget.value);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
        
        if (isEditMode) {
            props.updateStatus(status);
        }
    }

    useEffect(() => setStatus(props.status), [props.status]);

    return (
        <div className={styles.status}>
                {isEditMode 
                    ? (
                        <input 
                            type="text"
                            value={status}
                            onChange={(e) => onStatusChange(e)}
                            onBlur={toggleEditMode}
                            autoFocus
                        />
                    ) 
                    : <span onDoubleClick={toggleEditMode}>{status}</span>}
        </div>
    );
};
