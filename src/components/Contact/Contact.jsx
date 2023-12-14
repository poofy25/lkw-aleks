import styles from './contact.module.css'

import location from '/src/assets/svg/location.svg'
import email from '/src/assets/svg/email.svg'
import call from '/src/assets/svg/call.svg'

import { useState } from 'react'
import { useEffect } from 'react'

function Contact() {
    //true == Moldova , false == Romania
    const [contact , setContact] = useState(true)


    return ( 
        <section  className={styles.contact}>
            <div id='contact' className={styles.anchor}></div>
           
        <section>
            <h2>Contactează-ne</h2>
            <span>
                <button className={contact && styles.active} onClick={()=>{setContact(true)}}>Moldova</button>
                <button className={!contact && styles.active} onClick={()=>{setContact(false)}}>România</button>
            </span>
            {contact ? 
            <div>
            <a><img alt='Location Icon' src={location}/>bd. Traian 22, Chișinău</a>
            <a href='mailto:info@lkw-aleks.com'><img alt='Email Icon' src={email}/>info@lkw-aleks.com</a>
            <a href='tel:+373 69 150 151'><img alt='Call Icon' src={call}/>+373 69 150 150</a>
            <a href='tel:+373 69 150 151'><img alt='Call Icon' src={call}/>+373 69 150 151</a>
            <a href='tel:+373 69 102 681'><img alt='Call Icon' src={call}/>+373 69 102 681</a>
            <a href='tel:+373 78 000 155'><img alt='Call Icon' src={call}/>+373 78 000 155</a>
            </div>
            :
            <div>
            <a><img alt='Location Icon' src={location}/>bd. Țuțora 9B, Iași</a>
            <a href='mailto:info@lkw-aleks.com'><img alt='Email Icon' src={email}/>info@lkw-aleks.com</a>
            <a href='tel:+40 758 074 350'><img alt='Call Icon' src={call}/>+40 758 074 350</a>
            </div>
            }
        </section>
        {contact ? 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.3043022449915!2d28.843862276057482!3d46.97953513106923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97ecb4e57c40d%3A0x615087ec50268e69!2sLKW-ALEKS%20SPEDITION%20SRL!5e1!3m2!1sro!2sus!4v1702206802118!5m2!1sro!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            :
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.4075465520923!2d27.593415399999998!3d47.14987199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafbbd5795d45b%3A0x6474467ae6ae5f7e!2zQmxvYyA5QiwgQnVsZXZhcmR1bCDImnXIm29yYSA5QiwgSWHImWkgNzAwMTcwLCBSb23Dom5pYQ!5e0!3m2!1sro!2s!4v1702296426742!5m2!1sro!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            }
        </section>
     );
}

export default Contact;