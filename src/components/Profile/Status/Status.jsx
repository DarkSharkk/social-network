import React from "react";

import styles from './Status.module.css';

export class Status extends React.Component {
    state = {
        isEditMode: false
    }

    toggleEditMode = () => {
        this.setState({ isEditMode: !this.state.isEditMode })
    }
    
    render() {
        return (
            <div className={styles.status}>
                {this.state.isEditMode 
                    ? <input type="text" value={this.props.status} onBlur={this.toggleEditMode} autoFocus /> 
                    : <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>}
            </div>
        )
    }
}