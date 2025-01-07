import { Status } from '../Status/Status';
import avatar from "./../../../avatar.png";

import styles from './ProfileInfo.module.css';

export const ProfileInfo = ({ profile, status, updateStatus, updatePhoto, isOwner }) => {
    const uploadPhoto = (e) => {
        if (e.target?.files.length) {
            updatePhoto(e.target.files[0]);
        }
    };

    return (
        <div className={styles.profileInfo}>
            <img src={profile?.photos?.large || avatar} alt="" />
            <div className={styles.info}>
                <span>{profile.fullName}</span>
                <Status status={status} updateStatus={updateStatus} />
                {isOwner && <input type='file' onChange={uploadPhoto} />}
                <span>github: {profile.contacts.github || '-'}</span>
                <span>{profile.lookingForAJob ? 'Ищет работу' : 'Не ищет работу'}</span>
            </div>
        </div>
    );
}