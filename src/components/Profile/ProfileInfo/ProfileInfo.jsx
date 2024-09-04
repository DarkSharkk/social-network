import styles from './ProfileInfo.module.css';

export const ProfileInfo = ({ src, text }) => {
    return (
      <>
        <img src={src} />
        <p>{ text }</p>
      </>
    );
}