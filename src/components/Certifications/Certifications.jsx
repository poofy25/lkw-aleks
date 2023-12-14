import { useEffect } from 'react'
import styles from './certifications.module.css'
import { useState } from 'react'
import CertificationsCarousel from './CertificationsCarousel'
import { useRef } from 'react'

import arrowleft from '/src/assets/svg/arrowleft.svg'
import arrowright from '/src/assets/svg/arrowright.svg'

import ROJSON from '/src/languages/RO.json'
import RUJSON from '/src/languages/RU.json'
import ENJSON from '/src/languages/EN.json'

const languagesJson = {
  RO:ROJSON,
  RU:RUJSON,
  EN:ENJSON
}


function Certifications({language}) {

    const langJson = languagesJson[language].certificates


    const carouselRef = useRef(null);

    const handlePrev = ()=>{
        carouselRef.current.slickPrev();
    }
    const handleNext = ()=>{
        carouselRef.current.slickNext();
    }



    return ( 

        <section id='certificate' className={styles.certifications}>

            <div className={styles.section}><p>{langJson.subtitle}</p></div>

            <h2>{langJson.title}</h2>
            <div className={styles.header}>
                <p>
                    {langJson.text}
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