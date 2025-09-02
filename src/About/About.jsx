
import { useState } from "react";
import styles from "./About.module.css";
import image from "../assets/myPhoto.png";

export default function About({ innerRef }) {
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <section id="about" ref={innerRef} >
        <div className={styles.aboutContainer}  >
            <img className={styles.image} src={image} alt="About Me" />
            <div className={styles.aboutMeContainer}>
                <h2>About Me</h2>
                <p className={styles.aboutMeMsg}>
                    I’m a software engineer passionate about creating solutions that make a difference.
                    I enjoy solving complex problems, learning new technologies, and turning ideas into working software. 
                    Outside of coding, I love exploring tech trends and finding creative ways to improve digital experiences.
                     I also work with React, Node.js, HTML, CSS, and PHP to create full-stack solutions.
                </p>
                <div className={styles.skillsContainer}>
                    <a className={`${styles.aSkills} ${activeTab === "skills" ? styles.activeTab : ""}`}  onClick={() => setActiveTab("skills")}>Skills</a>
                    <a className={`${styles.aSkills} ${activeTab === "experience" ? styles.activeTab : ""}`}  onClick={() => setActiveTab("experience")}>Experience</a>
                    <a className={`${styles.aSkills} ${activeTab === "education" ? styles.activeTab : ""}`}  onClick={() => setActiveTab("education")}>Education</a>
                </div>
                
                <div className={styles.subSkillsContainer}>
                    {activeTab === "skills" && (
                        <div className={styles.skillSet}>
                            <p className={styles.webdev}>Full-stack development</p>
                            <p className={styles.webdev}>Database management</p>
                            <p className={styles.webdev}>API developement and intergration</p>
                            <p className={styles.webdev}>App development</p>
                            <p className={styles.softSkills} >Soft skills</p>
                            <ul>
                                <li>Effective communication and problem-solving skills</li>
                                <li>Team collaboration and ability to work independently</li>
                                <li>Fast learner with attention to detail</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === "experience" && (
                        <div className={styles.skillSet}>
                            <h3 style={{color: 'white', fontSize: '13px', fontFamily: 'verdana' ,lineHeight: '0.5'}} >Software Engineering Tutor</h3>
                            <p style={{color: '#00fff2', fontSize: '11px', lineHeight: '0.5' }} >ALX Africa | <i>Aug 2023 - Nov 2024</i> </p>
                            <ul style={{color: 'white', fontSize: '11px', lineHeight: '1.5', fontFamily: 'verdana' }} >
                                <li>Delivered tutoring in core software engineering subjects including algorithms, web development, and databases.</li>
                                <li>Improved average student performance by 15% through customized support and mentoring.</li>
                            </ul>
                            <p className={styles.projectExp} >Project Experience</p>
                            <p className={styles.projectName} >AI Prompts <small> - Team Project | Software Engineering Program </small> </p>
                            <p className={styles.projectName} >Tech Stack <small> - Next.js, Tailwind CSS, Google Cloud API, MongoDB </small> </p>
                            <ul>
                                <li className={styles.descTitle}>Responsibility:
                                    <small className={styles.description}> Focused on UI/UX to ensure an intuitive, responsive and clean user experience.</small>
                                </li>
                                <li className={styles.descTitle}>Achievements: 
                                    <small className={styles.description}> Led the frontend development, turning UI designs into functional, mobile-friendly components. Improved UX by implemeting real-time search navigation.</small>
                                </li>
                            </ul>
                        </div>
                    )}
                    {activeTab === "education" && (
                        <div className={styles.skillSet}>
                            <p className={styles.qualification} > Higher Certificate in Software Engineering</p>
                            <p className={styles.qualifiDesc} >ALX Africa <small> – 12 months Software Engineering program</small></p>
                            <p className={styles.qualification}>Bachelor of Education <small>( Mathematics Major )</small> </p>
                            <p className={styles.qualifiDesc}>University of Pretoria</p>
                            <p className={styles.qualification} >Grade 12</p>
                            <p className={styles.qualifiDesc}>Magigwana Secondary School</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </section>
    );
}
