import styles from './stats.module.css'

import stats1 from '/src/assets/svg/stats1.svg'
import stats2 from '/src/assets/svg/stats2.svg'
import stats3 from '/src/assets/svg/stats3.svg'
import stats4 from '/src/assets/svg/stats4.svg'


function Stats() {
    return ( 
        <section className={styles.stats}>
            <article>
                <div><img src={stats1}/></div>
                <h2>+1200</h2>
                <p>Comenzi Efectuate</p>
            </article>
            <article>
                <div><img src={stats2}/></div>
                <h2>+95000</h2>
                <p>Orase Deservite In Lume</p>
            </article>
            <article>
                <div><img  src={stats3}/></div>
                <h2>+200</h2>
                <p>Clienti Multumiti</p>
            </article>
            <article>
                <div><img  src={stats4}/></div>
                <h2>+50</h2>
                <p>Parteneri</p>
            </article>
        </section>
     );
}

export default Stats;