import styles from './Home.module.css';
import Profile from '../assets/myPhoto5.png'
function ProfileImage(){
    return(
        <section id="home"  >

        <div className={styles.imgContainer} >
            <img className={styles.image} src={Profile}></img>
        </div>
        </section>
    )
}
export default ProfileImage;