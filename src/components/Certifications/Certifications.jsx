import { useEffect } from 'react'
import styles from './certifications.module.css'
import { useState } from 'react'
import CertificationsCarousel from './CertificationsCarousel'
import { useRef } from 'react'

import arrowleft from '/src/assets/svg/arrowleft.svg'
import arrowright from '/src/assets/svg/arrowright.svg'


function Certifications() {

    const carouselRef = useRef(null);

    const handlePrev = ()=>{
        carouselRef.current.slickPrev();
    }
    const handleNext = ()=>{
        carouselRef.current.slickNext();
    }



    return ( 

        <section id='certificate' className={styles.certifications}>

            <div className={styles.section}><p>Certificate</p></div>

            <h2>Licență și certificate</h2>
            <div className={styles.header}>
                <p>
                Ne mândrim cu angajamentul nostru față de cele mai înalte standarde de calitate și conformitate legală. Mai jos, vă prezentăm certificatele și licențele noastre care atestă profesionalismul și dedicația noastră în furnizarea de servicii de transport internațional și logistică.
                </p>
                <span>
                    <button aria-label='Previous' onClick={handlePrev} ><img alt='Arrow Left Icon' src={arrowleft}/></button>
                    <button aria-label='Next' onClick={handleNext}><img alt='Arrow Right Icon' src={arrowright}/></button>
                </span>
            </div>
           
          
            <CertificationsCarousel
             carouselRef={carouselRef} 
             handleNext={handleNext} 
             handlePrev={handlePrev} 
            />
          
        </section>



     );
}

export default Certifications;