import styles from './Home.module.css';
import myCv from './myCVFin.pdf'

function Home({ innerRef }){

    return(
        <section id="home" ref={innerRef} className={styles.mainContainer} >
        <div className={styles.container} >
            <h4>Software</h4>
            <h2 className={styles.animatedT} >Hi, I'm <span></span></h2>
            <p> I don't just build web application — I create fast, responsive, and 
                user-focused web experiences that drive results. My experience with frameworks like React, Next.js,
                and Node.js has allowed me to develop a keen eye for detail and an ability to deliver high-quality results.
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
