import styles from './services.module.css'

import service1 from '/src/assets/img/service1.png'
import service2 from '/src/assets/img/service2.png'
import service3 from '/src/assets/img/service3.png'
import service4 from '/src/assets/img/service4.png'
import service5 from '/src/assets/img/service5.png'
import service7 from '/src/assets/img/service7.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


import ROJSON from '/src/languages/RO.json'
import RUJSON from '/src/languages/RU.json'
import ENJSON from '/src/languages/EN.json'

const languagesJson = {
  RO:ROJSON,
  RU:RUJSON,
  EN:ENJSON
}


function Services({language}) {
    const langJson = languagesJson[language].services
    return ( 
        <section id='servicii' className={styles.services}>

            <div><p>{langJson.subtitle}</p></div>
            <h2>{langJson.title}</h2>
            <p>{langJson.text}</p>
            <section>
                <article>
                <LazyLoadImage effect="blur" alt="Services 1 Image" src={service1}></LazyLoadImage>
                    <section>
                        <h4>{langJson.service['1'].title}</h4>
                        <p>
                        {langJson.service['1'].text}
                        </p>
                        <span>01</span>
                    </section>
                </article>
                <article>
                    <LazyLoadImage effect="blur"  alt="Services 2 Image" src={service3}></LazyLoadImage>
                    <section>
                        <h4>{langJson.service['2'].title}</h4>
                        <p>
                        {langJson.service['2'].text}
                        </p>
                        <span>02</span>
                    </section>
                </article>
                <article>
                    <LazyLoadImage effect="blur"  alt="Services 3 Image" src={service4}></LazyLoadImage>
                    <section>
                        <h4>{langJson.service['3'].title}</h4>
                        <p>
                        {langJson.service['3'].text}
                        </p>
                        <span>03</span>
                    </section>
                </article>
                <article>
                    <LazyLoadImage effect="blur"  alt="Services 4 Image" src={service5}></LazyLoadImage>
                    <section>
                        <h4>{langJson.service['4'].title}</h4>
                        <p>
                        {langJson.service['4'].text}
                        </p>
                        <span>04</span>
                    </section>
                </article>
                <article>
                    <LazyLoadImage effect="blur"  alt="Services 5 Image" src={service7}></LazyLoadImage>
                    <section>
                        <h4>{langJson.service['5'].title}</h4>
                        <p>
                        {langJson.service['5'].text}
                        </p>
                        <span>05</span>
                    </section>
                </article>
                <article>
                    <LazyLoadImage effect="blur"  alt="Services 6 Image" src={service2}></LazyLoadImage>
                    <section>
                        <h4>{langJson.service['6'].title}</h4>
                        <p>
                        {langJson.service['6'].text}
                        </p>
                        <span>06</span>
                    </section>
                </article>
            </section>

        </section>
     );
}

export default Services;