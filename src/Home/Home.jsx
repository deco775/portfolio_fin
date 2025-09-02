import styles from './Home.module.css';
import myCv from './myCVFin.pdf'

function Home({ innerRef }){

    return(
        <section id="home" ref={innerRef} className={styles.mainContainer} >
        <div className={styles.container} >
            <h4>Software Engineer</h4>
            <h2 className={styles.animatedT} >Hi, I'm <span></span></h2>
            <p> I’m a software engineer skilled in Python, JavaScript, SQL, 
                and AWS — Passionate about building technology that works for people. Good at solving problems with clean, effective code. 
            </p>
            <div className={styles.icons}>
                <a href={myCv} download="PitsoCV.pdf" className={styles.cvBtn}>Download CV</a>
                <a href="https://github.com/deco775" className={styles.homeIcn}><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/pitso-mkansi-85295b210/" className={styles.homeIcn}><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://x.com/Deco53270157" className={styles.homeIcn}><i className="fa-brands fa-square-x-twitter" ></i></a>
                <a href="https://www.facebook.com/mkansi.deco.7" className={styles.homeIcn}><i className="fa-brands fa-facebook" ></i></a>
            </div>
        </div>
        </section>
    )
}
export default Home;
