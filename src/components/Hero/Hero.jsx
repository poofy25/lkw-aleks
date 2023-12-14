import styles from './hero.module.css'

import heroIMG from '/src/assets/img/hero.png'
import arrowright from '/src/assets/svg/arrowright.svg'

function Hero() {
    return ( 
        <section id='acasa' className={styles.hero}>
            <img alt='Hero Section Background Image' src={heroIMG}/>
            <span className={styles.gradient}></span>
            <div>
                <p>Transport internațional, sigur și eficient </p>
            </div>
            <h1>Soluții optime către orice destinație</h1>
            <p>
            Cu o experiență de peste două decenii în domeniul transportului internațional de mărfuri,
            <br/>
            LKW-ALEKS Spedition reprezintă soluția ta de încredere pentru transport eficient și sigur.
            <br/>
            Descoperă serviciile noastre de top și parteneriatele solide pe care le construim cu clienții noștri!
            </p>
            <a href='#contact'>Obține oferta personalizată <img alt='Arrow Right Icon' src={arrowright}/></a>
        </section>
     );
}

export default Hero;