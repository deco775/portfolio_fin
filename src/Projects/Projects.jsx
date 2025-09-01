import { useState } from 'react';
import styles from './Projects.module.css';
//import slot from './slot.exe';
//import turtle from './main.exe';

function Projects({ innerRef }){
    const [showContent, setShowContent] = useState(false)

    return(
        <>
        <section id="projects" ref={innerRef} >
            <h2 className={styles.myPro} >My projects</h2>
            <div className={styles.projectsContainer} >
                <div className={`${styles.projectCard} ${styles.cart}`} >
                    <div className={styles.projectInfo}>
                        <h3>Shopping Cart</h3>
                        <p>
                            The Shopping Cart is a web-application that allows
                            users to browse products, add/remove items to/from their cart, and the 
                            the amount is updated.
                        </p>
                        <span className={styles.projectLan}>
                            <p>React</p>
                            <p>Redux</p>
                            <p>Tailwind CSS</p>
                        </span>
                        <a href="https://shopping-cart-532i.vercel.app/" target="_blank" rel="noreferrer">view project</a>
                    </div>
                </div>
                <div className={`${styles.projectCard} ${styles.movies}`} >
                    <div className={styles.projectInfo}>
                        <h3 >Movie App</h3>
                        <p>
                            A React-based search engine for movies that allows users to search for movies, 
                            view details, and explore trending films. Users can favor movies by clicking on the heart icon, 
                            and navigate to their favorate movies.
                        </p>
                        <span className={styles.projectLan}>
                            <p>React</p>
                            <p>Css</p>
                            <p>themoviedb API</p>
                        </span>
                        <a href="https://movies-app-seven-iota.vercel.app/" target="_blank" rel="noreferrer">view project</a>
                    </div>
                </div>
                <div className={`${styles.projectCard} ${styles.watches}`} >
                    <div className={styles.projectInfo}>
                        <h3>The Watch Store</h3>
                        <p>
                            A simple watch store website that allows users to browse and 
                            explore different watch collections. Users can search for watches,
                            They can filter watches according to prices or catergories.
                        </p>
                        <span className={styles.projectLan}>
                            <p>JavaScript</p>
                            <p>Html</p>
                            <p>Css</p>
                        </span>
                        <a href="https://the-watch-store.vercel.app/" target="_blank" rel="noreferrer" >view project</a>
                    </div>
                </div>
                <div className={`${styles.projectCard} ${styles.ai}`} >
                    <div className={styles.projectInfo}>
                        <h3>AI Prompts</h3>
                        <p>
                        This is a Next.js-powered web application that allows 
                        users to create, share, and discover AI prompts. Users 
                        can sign in, write helpful AI prompts, and search for prompts 
                        shared by others.
                        </p>
                        <span className={styles.projectLan}>
                            <p>Next.js</p>
                            <p>MongoDB</p>
                            <p>Google Cloud API</p>
                        </span>
                        <a href="https://ai-prompts-swart-eta.vercel.app/" target="_blank" rel="noreferrer">view project</a>
                    </div>
                </div>
                <div className={styles.hiddenProjectContainer}>
                
                {showContent && (
                 <div className={styles.hiddenProjects}>
                    <div className={`${styles.projectCard} ${styles.weather}`} >
                        <div className={styles.projectHiddenInfo}>
                            <h3>Weather App</h3>
                            <p>
                                A Weather App that fetches and displays real-time weather 
                                data using the OpenWeather API. Users can display weather data 
                                for any city.
                            </p>
                            <span className={styles.projectLan}>
                                <p>Javascript</p>
                                <p>Html</p>
                                <p>Css</p>
                                <p>openweathermap API</p>
                            </span>
                            <a href="https://deco775.github.io/weather_app/" target="_blank" rel="noreferrer" >view project</a>
                        </div>
                    </div>
                    <div className={`${styles.projectCard} ${styles.slot}`} >
                        <div className={styles.projectHiddenInfo}>
                            <h3>Slot Machine</h3>
                            <p>
                                A simple slot machine game built using Python, allowing users to 
                                spin and try their luck at matching symbols(numbers). To access this game
                                you need to download the file.
                            </p>
                            <span className={styles.projectLan}>
                                <p>Python</p>
                            </span>
                            <a href="/slot.exe" download="slot.exe" target="_blank" rel="noreferrer" >view project</a>
                        </div>
                    </div>
                    <div className={`${styles.projectCard} ${styles.turtles}`} >
                        <div className={styles.projectHiddenInfo}>
                            <h3>Racing Turtles</h3>
                            <p>
                                A fun turtle racing game built using Python's Turtle module, where multiple turtles 
                               of different colores race to the finish line with randomized speeds. Users can choose
                                how many turtles they want to race.
                            </p>
                            <span className={styles.projectLan}>
                                <p>Python</p>
                                <p>Turtle Module</p>
                            </span>
                            <a href="/main.exe" download="turtless.exe" target="_blank" rel="noreferrer">view project</a>
                        </div>
                    </div>
                    <div className={`${styles.projectCard} ${styles.dice}`} >
                        <div className={styles.projectHiddenInfo}>
                            <h3>Dice Roller</h3>
                            <p>
                                A Dice Roller web application. 
                                Click the button to roll the dice and get a random number dice. Users can choose to display as many
                                dice you like.
                            </p>
                            <span className={styles.projectLan}>
                                <p>Javasctipt</p>
                                <p>Html</p>
                                <p>Css</p>
                            </span>
                            <a href="https://deco775.github.io/dice_roller/" target="_blank" rel="noreferrer" >view project</a>
                        </div>
                    </div>
                    <div className={`${styles.projectCard} ${styles.clock}`} >
                        <div className={styles.projectHiddenInfo}>
                            <h3>Digital Clock</h3>
                            <p>
                            
                                This clock displays the current time in real-time and updates every 
                                second.
                            </p>
                            <span className={styles.projectLan}>
                                <p>Javascripy</p>
                                <p>Html</p>
                                <p>Css</p>
                            </span>
                            <a href="https://deco775.github.io/digital_clock/" target="_blank" rel="noreferrer" >view project</a>
                        </div>
                    </div>
                    <div className={`${styles.projectCard} ${styles.backup}`} >
                        <div className={styles.projectHiddenInfo}>
                            <h3>Automated Backup Files</h3>
                            <p>
                                A Python-based automated file backup system that periodically 
                                backs up files and folders to a specified location.
                            </p>
                            <span className={styles.projectLan}>
                                <p>Python</p>
                                <p>Os module</p>
                                <p>Shutil module</p>
                            </span>
                            <a href=''>view repo</a>
                        </div>
                    </div>
            
                </div>)}  
            </div>
            
        </div>
            <button className={styles.showBtn} onClick={()=> setShowContent(!showContent)}>
                {showContent? "see less": "see more"}
            </button>
       </section> 
    </>
    )
}
export default Projects;