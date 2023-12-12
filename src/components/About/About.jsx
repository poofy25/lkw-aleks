import styles from './about.module.css'

import aboutIMG from '/src/assets/img/about.png'
import arrowright from '/src/assets/svg/arrowright.svg'

function About() {
    return ( 
        <section id='desprenoi' className={styles.about}>
                <section className={styles.imgSection}>
                    <img src={aboutIMG}/>
                    <div><h3>20+</h3><p>ani de <br/> experienta</p></div>
                </section>
                <section className={styles.textSection}>
                    <div><p>Despre Noi</p></div>
                    <h2>O istorie de performanță și succes</h2>
                    <p>Fondată în 2002, LKW-ALEKS Spedition este o companie dedicată oferirii unui spectru larg de servicii de transport şi logistică, pentru a răspunde la nevoile diverse şi exigente ale mediului de afaceri.   Cu o experienţă de peste 20 ani în domeniu şi într-un mediu de afaceri aflat într-o permanentă schimbare, am urmărit întotdeauna să răspundem cu promptitudine clienţilor, astfel încît aceştia să beneficieze de flexibilitate, profesionalism şi calitatea serviciilor. </p>
                    <span><span>🗹</span>Soluții logistice fiabile și flexibile</span>
                    <span><span>🗹</span>Echipă de profesioniști dedicată</span>
                    <span><span>🗹</span>Punctualitate și costuri competitive</span>
                    <a href='#contact'>Contactează-ne<img src={arrowright}/></a>
                </section>
        </section>
     );
}

export default About;