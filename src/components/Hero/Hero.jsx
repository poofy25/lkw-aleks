import styles from './hero.module.css'

import heroIMG from '/src/assets/img/hero.png'

function Hero() {
    return ( 
        <section className={styles.hero}>
            <img src={heroIMG}/>
            <span className={styles.gradient}></span>
            <div>
                <p>Partenerul Tău De Încredere</p>
            </div>
            <h1>Slouții Eficiente De Transport Internațional</h1>
            <p>
            Cu o experiență de peste două decenii în domeniul transportului internațional de mărfuri, 
            <br/>
            LKW-ALEKS Spedition reprezintă soluția ta de încredere pentru logistică eficientă și sigură. 
            <br/>
            Descoperă serviciile noastre de top și parteneriatele solide pe care le construim cu clienții noștri!
            </p>
            <a>Contacteazăne</a>
        </section>
     );
}

export default Hero;