import styles from './TechSkills.module.css'
import logo1 from '../assets/logos1.png'
import logo2 from '../assets/logos2.png'
import logo3 from '../assets/logos3.png'

function TechSkills({ innerRef }){

    return(
       <>
        <section id="skills" ref={innerRef} >
         <div className={styles.techSkillsContainer} >
            <h2 className={styles.title} >Technical Skills</h2>
            <div className={styles.program}>
                <div className={`${styles.pro} ${styles.firstPro}`}>
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>C</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>React Native <b style={{fontStyle: "italic", fontSize: "80%"}}>(js framework)</b></li>
                    </ul>
                    <img className={styles.logos} src={logo1}/>
                </div>
                <div className={`${styles.pro} ${styles.secondPro}`}>
                    <h3>Web Devevlopment</h3>
                    <ul>
                        <li>HTML, CSS and JavaScript</li>
                        <li>React & Next.js</li>
                        <li>Node & Express.js</li>
                        <li>Flask</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                    <img className={styles.logos} src={logo2}/>
                </div>
                <div className={`${styles.pro} ${styles.thirdPro}`}>
                    <h3>Tools</h3>
                    <ul>
                        <li>Linux</li>
                        <li>VS Code</li>
                        <li>JSON & RESTful API</li>
                        <li>Git and Github</li>
                        <li>Canva & Figma</li>
                        <li>WordPress</li>
                    </ul> 
                    <img className={styles.logos} src={logo3}/>                   
                </div>
        </div></div>
        </section>
       </>
    )
}

export default TechSkills;