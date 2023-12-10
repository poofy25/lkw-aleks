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

        <section className={styles.whyUs}>

            <span><img src={arrowdownright}/>DE CE NOI?</span>
            <h2>Motive Care Fac Diferenta</h2>

            <div>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img src={box}/></div>
                            <h3>Logistica integrata</h3>
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
                            <div><img src={partners}/></div>
                            <h3>Logistica integrata</h3>
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
                            <div><img src={support}/></div>
                            <h3>Logistica integrata</h3>
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
                            <div><img src={worldwide}/></div>
                            <h3>Logistica integrata</h3>
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
                            <div><img src={solution}/></div>
                            <h3>Logistica integrata</h3>
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
                            <div><img src={achievement}/></div>
                            <h3>Logistica integrata</h3>
                        </header>
                        <span>
                            <p>Vă oferim soluții complete de logistică, gestionând eficient toate etapele procesului de transport. De la depozitare până la distribuție și urmărire în timp real, vă oferim transparență și control total.</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                
            </div>
            

        </section>

    );
}

export default WhyUs;