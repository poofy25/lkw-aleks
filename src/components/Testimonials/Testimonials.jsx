import { useEffect } from 'react'
import styles from './testimonials.module.css'
import { useState } from 'react'
import TestimonialsCarousel from './TestimonialsCarousel'

import arrowleft from '/src/assets/svg/arrowleft.svg'
import arrowright from '/src/assets/svg/arrowright.svg'

import { useRef } from 'react'

function Testimonials() {

    const carouselRef = useRef(null);

    const handlePrev = ()=>{
        carouselRef.current.slickPrev();
    }
    const handleNext = ()=>{
        carouselRef.current.slickNext();
    }



    return ( 

        <section id='recenzii' className={styles.testimonials}>

            <div className={styles.section}><p>Recenzii</p></div>

            <div className={styles.header}>
                <h2>Ce Spun Clientii Nostri</h2>
                <span>
                    <button aria-label='Previous' onClick={handlePrev} ><img alt="Arrow Left Icon" src={arrowleft}/></button>
                    <button aria-label='Next' onClick={handleNext}><img alt="Arrow Right Icon" src={arrowright}/></button>
                </span>
            </div>
          
            <TestimonialsCarousel
             carouselRef={carouselRef} 
             handleNext={handleNext} 
             handlePrev={handlePrev} 
            />
          
        </section>



     );
}

export default Testimonials;