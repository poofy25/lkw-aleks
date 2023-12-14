import styles from './whyUs.module.css'

import stats2 from '/src/assets/svg/stats2.svg'

import arrowdownright from '/src/assets/svg/arrowdownright.svg'
import worldwide from '/src/assets/svg/worldwide.svg'
import partners from '/src/assets/svg/partners.svg'
import box from '/src/assets/svg/box.svg'
import support from '/src/assets/svg/support.svg'
import solution from '/src/assets/svg/solution.svg'
import achievement from '/src/assets/svg/achievement.svg'

import ROJSON from '/src/languages/RO.json'
import RUJSON from '/src/languages/RU.json'
import ENJSON from '/src/languages/EN.json'

const languagesJson = {
  RO:ROJSON,
  RU:RUJSON,
  EN:ENJSON
}


function WhyUs({language}) {

    const langJson = languagesJson[language].whyus

    return ( 

        <section id='decenoi' className={styles.whyUs}>

            <span><img alt="Arrow Down Right Icon" src={arrowdownright}/>{langJson.subtitle}</span>
            <h2>{langJson.title}</h2>

            <div>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img alt="Box Icon" src={box}/></div>
                            <h3>{langJson.article['1'].title}</h3>
                        </header>
                        <span>
                            <p>{langJson.article['1'].text}</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img alt="Partners Icon" src={partners}/></div>
                            <h3>{langJson.article['2'].title}</h3>
                        </header>
                        <span>
                            <p>{langJson.article['2'].text}</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img alt="Support Icon" src={support}/></div>
                            <h3>{langJson.article['3'].title}</h3>
                        </header>
                        <span>
                            <p>{langJson.article['3'].text}</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img alt="Worldwide Icon" src={worldwide}/></div>
                            <h3>{langJson.article['4'].title}</h3>
                        </header>
                        <span>
                            <p>{langJson.article['4'].text}</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img alt="Solution Icon" src={solution}/></div>
                            <h3>{langJson.article['5'].title}</h3>
                        </header>
                        <span>
                            <p>{langJson.article['5'].text}</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                <article className={styles.whyUsArticle}>
                    <article className={styles.articleContent}>
                        <header>
                            <div><img alt="Achievement Icon" src={achievement}/></div>
                            <h3>{langJson.article['6'].title}</h3>
                        </header>
                        <span>
                            <p>{langJson.article['6'].text}</p>
                        </span>
                    </article>
                    <div></div>
                </article>
                
            </div>
            

        </section>

    );
}

export default WhyUs;