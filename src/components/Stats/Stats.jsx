import styles from './stats.module.css'

import stats1 from '/src/assets/svg/stats1.svg'
import stats2 from '/src/assets/svg/stats2.svg'
import stats3 from '/src/assets/svg/stats3.svg'
import stats4 from '/src/assets/svg/stats4.svg'

import ROJSON from '/src/languages/RO.json'
import RUJSON from '/src/languages/RU.json'
import ENJSON from '/src/languages/EN.json'

const languagesJson = {
  RO:ROJSON,
  RU:RUJSON,
  EN:ENJSON
}

function Stats({language}) {
    const langJson = languagesJson[language].stats
    return ( 
        <section id='stats' className={styles.stats}>
            <article>
                <div><img  alt="Stats 1 Icon" src={stats1}/></div>
                <h2>12000+</h2>
                <p>{langJson['1']}</p>
            </article>
            <article>
                <div><img alt="Stats 2 Icon" src={stats2}/></div>
                <h2>50+</h2>
                <p>{langJson['2']}</p>
            </article>
            <article>
                <div><img alt="Stats 3 Icon"  src={stats4}/></div>
                <h2>20+</h2>
                <p>{langJson['3']}</p>
            </article>
            <article>
                <div><img alt="Stats 4 Icon" src={stats3}/></div>
                <h2>520+</h2>
                <p>{langJson['4']}</p>
            </article>
        </section>
     );
}

export default Stats;