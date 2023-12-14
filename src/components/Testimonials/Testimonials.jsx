import { useEffect } from 'react'
import styles from './testimonials.module.css'
import { useState } from 'react'
import TestimonialsCarousel from './TestimonialsCarousel'

import arrowleft from '/src/assets/svg/arrowleft.svg'
import arrowright from '/src/assets/svg/arrowright.svg'

import { useRef } from 'react'

import ROJSON from '/src/languages/RO.json'
import RUJSON from '/src/languages/RU.json'
import ENJSON from '/src/languages/EN.json'

const languagesJson = {
  RO:ROJSON,
  RU:RUJSON,
  EN:ENJSON
}


function Testimonials({language}) {

    const langJson = languagesJson[language].testimonials

    const carouselRef = useRef(null);

    const handlePrev = ()=>{
        carouselRef.current.slickPrev();
    }
    const handleNext = ()=>{
        carouselRef.current.slickNext();
    }



    return ( 

        <section id='recenzii' className={styles.testimonials}>

            <div className={styles.section}><p>{langJson.subtitle}</p></div>

            <div className={styles.header}>
                <h2>{langJson.title}</h2>
                <span>
                    <button aria-label='Previous' onClick={handlePrev} ><img alt="Arrow Left Icon" src={arrowleft}/></button>
                    <button aria-label='Next' onClick={handleNext}><img alt="Arrow Right Icon" src={arrowright}/></button>
                </span>
            </div>
          
            <TestimonialsCarousel
             carouselRef={carouselRef} 
             handleNext={handleNext} 
             handlePrev={handlePrev} 
             langJson={langJson}
            />
          
        </section>



     );
}

export default Testimonials;