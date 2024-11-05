import { Status } from '../Status/Status';
import styles from './ProfileInfo.module.css';

export const ProfileInfo = ({ profile, status, updateStatus }) => {
    return (
        <div className={styles.profileInfo}>
            <img src={profile.photos.large} alt="" />
            <div className={styles.info}>
                <span>{profile.fullName}</span>
                <Status status={status} updateStatus={updateStatus} />
                <span>github: {profile.contacts.github}</span>
                <span>{profile.lookingForAJob ? 'Ищет работу' : 'Не ищет работу'}</span>
            </div>
        </div>
    );
}