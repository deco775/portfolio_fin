import styles from './Footer.module.css'

function Footer(){

    return(
            <footer>
                <div className={styles.footer}>
                    <p>Copyright &copy; 2023. Made with <b className={styles.heart}>❤</b> by Pitso</p>

                </div>
            </footer>
    )
}

export default Footer;