import { useState } from 'react';
import { Status } from '../Status/Status';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormControl/FormControl';
import avatar from "./../../../avatar.png";

import styles from './ProfileInfo.module.css';

const InfoContent = ({ profile }) => {
    const existingContacts = Object.keys(profile.contacts).filter((contact) => profile.contacts[contact]);

    return (
        <div className={styles.infoContent}>
            <span>about me: {profile.aboutMe}</span>

            <span>
                job status: 
                <span className={styles.value}>
                    {profile.lookingForAJob ? ' Looking for a job' : ' Not looking for a job'}
                </span>
            </span>
            {profile.lookingForAJobDescription && <div>{profile.lookingForAJobDescription}</div>}
                
            <span>
                contacts: {
                    existingContacts.map((contact) => 
                        <div className={styles.contacts}>
                            {`${contact} - `}
                            <span className={styles.value}>{profile.contacts[contact]}</span>
                        </div>)
                }
            </span>
        </div>
    );
};

const InfoContentForm = reduxForm({ form: 'profileInfo' })(({ handleSubmit, contacts, error }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.infoContentForm}>
            <Field name='fullName' component={Input} placeholder='Full name' />
            <Field name='aboutMe' component={Input} placeholder='About me' validate={[]} />
            <div>
                <Field name='lookingForAJob' component='input' type='checkbox' />
                <span>Looking for a job</span>
            </div>
            <Field name='lookingForAJobDescription' component='textarea' placeholder='Find job description' />
            <div>
                {Object.keys(contacts).map((contact) => (
                    <Field key={contact} name={`contacts.${contact}`} component={Input} placeholder={contact} />
                ))}
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <button>Submit</button>
        </form>
    );
});

export const ProfileInfo = ({ profile, status, updateStatus, updatePhoto, updateInfo, isOwner }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    console.log(profile);

    const uploadPhoto = (e) => {
        if (e.target?.files.length) {
            updatePhoto(e.target.files[0]);
        }
    };

    const handleSubmit = (formData) => {
        updateInfo(formData, profile.userId);
        // setIsEditMode(false);
    };

    return (
        <div className={styles.profileInfo}>
            <img src={profile?.photos?.large || avatar} alt="" />
            <div className={styles.info}>
                <h3>{profile.fullName}</h3>
                <Status status={status} updateStatus={updateStatus} />

                {isOwner && <input type='file' onChange={uploadPhoto} />}

                {isEditMode 
                    ? <InfoContentForm initialValues={profile} onSubmit={handleSubmit} contacts={profile.contacts} /> 
                    : (
                        <>
                            <InfoContent profile={profile} />
                            <button onClick={() => setIsEditMode(!isEditMode)}>Edit</button>
                        </>
                    )
                }
            </div>
        </div>
    );
}