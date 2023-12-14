import styles from './about.module.css'

import aboutIMG from '/src/assets/img/about.png'
import arrowright from '/src/assets/svg/arrowright.svg'
import checkbox from '/src/assets/svg/checkbox.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


import ROJSON from '/src/languages/RO.json'
import RUJSON from '/src/languages/RU.json'
import ENJSON from '/src/languages/EN.json'

const languagesJson = {
  RO:ROJSON,
  RU:RUJSON,
  EN:ENJSON
}

function About({language}) {

    const langJson = languagesJson[language].aboutus

    return ( 
        <section id='desprenoi' className={styles.about}>
                <section className={styles.imgSection}>
                    <LazyLoadImage effect='blur' alt='Background Image for About Section' src={aboutIMG}/>
                    <div><h3>20+</h3><p>{langJson.imgtext}</p></div>
                </section>
                <section className={styles.textSection}>
                    <div><p>{langJson.subtitle}</p></div>
                    <h2>{langJson.title}</h2>
                    <p>{langJson.text}</p>
                    <span><img alt='Checkbox Icon' src={checkbox}/>{langJson.checkboxtext['1']}</span>
                    <span><img alt='Checkbox Icon' src={checkbox}/>{langJson.checkboxtext['2']}</span>
                    <span><img alt='Checkbox Icon' src={checkbox}/>{langJson.checkboxtext['3']}</span>
                    <a href='#contact'>{langJson.btntext}<img alt='Arrow Right Icon' src={arrowright}/></a>
                </section>
        </section>
     );
}

export default About;