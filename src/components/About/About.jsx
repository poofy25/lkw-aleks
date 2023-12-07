import styles from './about.module.css'

import aboutIMG from '/src/assets/img/about.png'

function About() {
    return ( 
        <section className={styles.about}>
                <section className={styles.imgSection}>
                    <img src={aboutIMG}/>
                    <div><h3>20+</h3><p>ani de <br/> experienta</p></div>
                </section>
                <section className={styles.textSection}>
                    <div><p>Despre Noi</p></div>
                    <h2>Servicii De Transport Eficiente Si Sigure</h2>
                    <p>Fondată în 2002, LKW-ALEKS Spedition este o companie dedicată oferirii de servicii de transport internațional de mărfuri de cea mai înaltă calitate. Cu o flotă de 20 de autotrenuri și o echipă experimentată, ne-am consolidat reputația în industrie prin angajamentul nostru față de profesionalism, siguranță și promptitudine.</p>
                    <span><span>🗹</span>Solutii logistice fiabile si flexibile</span>
                    <span><span>🗹</span>Echipa de profesionisti dedicata</span>
                    <span><span>🗹</span>Punctualitate si costuri competitive</span>
                    <a>Contacteaza-ne</a>
                </section>
        </section>
     );
}

export default About;