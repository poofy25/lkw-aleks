import styles from './hero.module.css'

import heroIMG from '/src/assets/img/hero.webp'
import arrowright from '/src/assets/svg/arrowright.svg'

import ROJSON from '/src/languages/RO.json'
import RUJSON from '/src/languages/RU.json'
import ENJSON from '/src/languages/EN.json'

const languagesJson = {
  RO:ROJSON,
  RU:RUJSON,
  EN:ENJSON
}


function Hero({language}) {

    const langJson = languagesJson[language].hero


    return ( 
        <section id='acasa' className={styles.hero}>
            <img fetchpriority="high" alt='Hero Section Background Image' src={heroIMG}/>
            <span className={styles.gradient}></span>
            <div>
                <p>{langJson.subtitle} </p>
            </div>
            <h1>{langJson.title}</h1>
            <p>
            {langJson.text['1']}
            <br/>
            {langJson.text['2']}
            <br/>
            {langJson.text['3']}
            </p>
            <a href='#contact'>{langJson.btntext} <img alt='Arrow Right Icon' src={arrowright}/></a>
        </section>
     );
}

export default Hero;