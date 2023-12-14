import styles from './whyUs.module.css'

import stats2 from '/src/assets/svg/stats2.svg'

import arrowdownright from '/src/assets/svg/arrowdownright.svg'
import worldwide from '/src/assets/svg/worldwide.svg'
import partners from '/src/assets/svg/partners.svg'
import box from '/src/assets/svg/box.svg'
import support from '/src/assets/svg/support.svg'
import newIcon from '/src/assets/svg/new.svg'
import solution from '/src/assets/svg/solution.svg'
import achievement from '/src/assets/svg/achievement.svg'


function WhyUs() {
    return ( 

        <section id='decenoi' className={styles.whyUs}>

            <span><img alt="Arrow Down Right Icon" src={arrowdownright}/>DE CE NOI?</span>
            <h2>Motive care fac diferența</h2>

            <div>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img alt="Box Icon" src={box}/></div>
                            <h3>Logistică integrată</h3>
                        </header>
                        <span>
                            <p>Vă oferim soluții complete de logistică, gestionând eficient toate etapele procesului de transport. De la depozitare până la distribuție și urmărire în timp real, vă oferim transparență și control total.</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img alt="Partners Icon" src={partners}/></div>
                            <h3>Punctualitate</h3>
                        </header>
                        <span>
                            <p>În lumea afacerilor, fiecare secundă contează. Punem un accent deosebit pe punctualitate, asigurându-ne că mărfurile tale ajung la destinație la timp, în fiecare dată.</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img alt="Support Icon" src={support}/></div>
                            <h3>Suport continuu</h3>
                        </header>
                        <span>
                            <p>Oferim suport personalizat pentru a asigura o experiență de transport fără probleme și comunicare eficientă în fiecare etapă.</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img alt="Worldwide Icon" src={worldwide}/></div>
                            <h3>Flotă Modernă</h3>
                        </header>
                        <span>
                            <p>Beneficiază de serviciile noastre cu o flotă echipată cu tehnologie de ultimă generație pentru a asigura siguranța și eficiența transportului.</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img alt="Solution Icon" src={solution}/></div>
                            <h3>Soluții Personalizate</h3>
                        </header>
                        <span>
                            <p>Ne adaptăm la nevoile tale specifice, oferind soluții personalizate și flexibile pentru a satisface cerințele tale de transport.</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img alt="Achievement Icon" src={achievement}/></div>
                            <h3>Experiență și Profesionalism</h3>
                        </header>
                        <span>
                            <p>Cu o prezență de peste două decenii în industrie, avem expertiza necesară pentru a gestiona cu succes orice tip de transport internațional.</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                
            </div>
            

        </section>

    );
}

export default WhyUs;