import styles from './contact.module.css'

import location from '/src/assets/svg/location.svg'
import email from '/src/assets/svg/email.svg'
import call from '/src/assets/svg/call.svg'


function Contact() {
    return ( 
        <section  className={styles.contact}>
            <div id='contact' className={styles.anchor}></div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.3043022449915!2d28.843862276057482!3d46.97953513106923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97ecb4e57c40d%3A0x615087ec50268e69!2sLKW-ALEKS%20SPEDITION%20SRL!5e1!3m2!1sro!2sus!4v1702206802118!5m2!1sro!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <section>
            <h2>Contacteaza-ne</h2>
            <a><img src={location}/>bd. Traian 22, Chisinau</a>
            <a href='mailto:info@lkw-aleks.com'><img src={email}/>info@lkw-aleks.com</a>
            <a href='tel:+37369150150'><img src={call}/>+373 69 150 150</a>
        </section>

        </section>
     );
}

export default Contact;