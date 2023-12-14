import styles from './stats.module.css'

import stats1 from '/src/assets/svg/stats1.svg'
import stats2 from '/src/assets/svg/stats2.svg'
import stats3 from '/src/assets/svg/stats3.svg'
import stats4 from '/src/assets/svg/stats4.svg'


function Stats() {
    return ( 
        <section id='stats' className={styles.stats}>
            <article>
                <div><img  alt="Stats 1 Icon" src={stats1}/></div>
                <h2>12000+</h2>
                <p>Comenzi Efectuate</p>
            </article>
            <article>
                <div><img alt="Stats 2 Icon" src={stats2}/></div>
                <h2>50+</h2>
                <p>Destinații</p>
            </article>
            <article>
                <div><img alt="Stats 3 Icon"  src={stats4}/></div>
                <h2>20+</h2>
                <p>Ani De Experiență</p>
            </article>
            <article>
                <div><img alt="Stats 4 Icon" src={stats3}/></div>
                <h2>520+</h2>
                <p>Clienți Mulțumiți</p>
            </article>
        </section>
     );
}

export default Stats;