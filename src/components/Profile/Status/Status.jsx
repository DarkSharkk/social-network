import React from "react";

import styles from './Status.module.css';

export class Status extends React.Component {
    state = {
        isEditMode: false,
        status: this.props.status,
    }

    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value });
    }

    toggleEditMode = () => {
        this.setState({ isEditMode: !this.state.isEditMode });
        if (this.state.isEditMode) {
            this.props.updateStatus(this.state.status);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }
    
    render() {
        return (
            <div className={styles.status}>
                {this.state.isEditMode 
                    ? (
                        <input 
                            type="text"
                            value={this.state.status}
                            onChange={(e) => this.onStatusChange(e)}
                            onBlur={this.toggleEditMode}
                            autoFocus
                        />
                    ) 
                    : <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>}
            </div>
        )
    }
}