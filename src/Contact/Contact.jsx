import styles from './Contact.module.css';
import { useState } from 'react';
import emailjs from "emailjs-com"
import myCv from './myCVFin.pdf'


function Contact({ innerRef }) {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_cds70g5';
    const templateId = 'template_tqqv8vl';
    const publicKey = '9ABxtarOoEN0yMy0w';

    //A new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Pitso',
      message: message,
    };

   /* // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        alert('Message sent successfully');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });*/
      
emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response) => {
    console.log('Email sent successfully!', response);
    setName('');
    setEmail('');
    setMessage('');
    setAlertMessage('Message sent successfully!');
    setShowAlert(true);

    // Auto-hide after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  })
  .catch((error) => {
    console.error('Error sending email:', error);
    setAlertMessage('Failed to send message.');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  });

  }

  return (
    <section id="contact" ref={innerRef} >
    <div className={styles.contactContainer} >
            <div className={styles.symbols} >
                <h2>Contact Me</h2>
                <p className={styles.emailIcon}><i className="fa-solid fa-envelope" ></i> <b>mkansipitso@gmail.com</b></p>
                <p className={styles.emailIcon}><i className="fa-solid fa-phone" ></i><b> 072 083 1144</b></p>
                <div className={styles.icons} >
                    <a href="https://github.com/deco775"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/pitso-mkansi-85295b210/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://x.com/Deco53270157"><i className="fa-brands fa-square-x-twitter"></i></a>
                    <a href="https://www.facebook.com/mkansi.deco.7"><i className="fa-brands fa-facebook" ></i></a>
                </div>
                <a href={myCv} download="PitsoCV.pdf" className={styles.cvBtn}>Download CV</a>
            </div>
            <form onSubmit={handleSubmit} >
                <div className={styles.inputT} >
                    <input type="text" name="name" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
                    <input type="email" name="email"  placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    <textarea name="message" placeholder="message" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
                    {showAlert && (
                      <div className={styles.customAlert}>
                        <p>{alertMessage}</p>
                      </div>
                    )}
                    <button type='submit'>send</button>
                </div>
            </form>
    </div>
    </section>
  )
}
export default Contact;
