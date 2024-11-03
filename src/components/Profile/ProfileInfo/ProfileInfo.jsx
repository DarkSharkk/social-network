import { Status } from '../Status/Status';
import styles from './ProfileInfo.module.css';

export const ProfileInfo = ({ profile }) => {
    return (
        <div className={styles.profileInfo}>
            <img src={profile.photos.large} alt="" />
            <div className={styles.info}>
                <span>{profile.fullName}</span>
                <Status status={"memento mori..."} />
                <span>github: {profile.contacts.github}</span>
                <span>{profile.lookingForAJob ? 'Ищет работу' : 'Не ищет работу'}</span>
            </div>
        </div>
    );
}