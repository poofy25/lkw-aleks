import { useEffect } from 'react'
import styles from './testimonials.module.css'
import { useState } from 'react'
import TestimonialsCarousel from './TestimonialsCarousel'

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

        <section className={styles.testimonials}>

            <div className={styles.section}><p>Recenzii</p></div>

            <div className={styles.header}>
                <h2>Ce Spun Clientii Nostri</h2>
                <span>
                    <button onClick={handlePrev} >⇦</button>
                    <button onClick={handleNext}>⇨</button>
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