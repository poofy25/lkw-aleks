import styles from './faq.module.css'
import Faq from "react-faq-component";
import './faqComponent.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import faqImg from '/src/assets/img/faq.png'

import ROJSON from '/src/languages/RO.json'
import RUJSON from '/src/languages/RU.json'
import ENJSON from '/src/languages/EN.json'

const languagesJson = {
  RO:ROJSON,
  RU:RUJSON,
  EN:ENJSON
}


function FAQ({language}) {

    const langJson = languagesJson[language].faq

    const data = {
        rows: [
            {
                title: <h4 className='faqh4'>{langJson.questions['1'].question}</h4>,
                content: <p className='faqp'>{langJson.questions['1'].answer}</p>,
            },
            {
                title: <h4 className='faqh4'>{langJson.questions['2'].question}</h4>,
                content: <p className='faqp'>{langJson.questions['2'].answer}</p>,
            },
            {
                title: <h4 className='faqh4'>{langJson.questions['3'].question}</h4>,
                content: <p className='faqp'>{langJson.questions['3'].answer}</p>,
            },
            {
                title: <h4 className='faqh4'>{langJson.questions['4'].question}</h4>,
                content: <p className='faqp'>{langJson.questions['4'].answer}</p>,
            },
        ],
    };
    
    const FaqStyles = {
        bgColor: 'transparent',
        titleTextColor: "blue",
        rowTitleColor: "#f7f7f7",
        rowContentColor: '#f7f7f7',
        arrowColor: "#f7f7f7",
    };
    
    const config = {
        animate: true,
        openOnload:data.rows,
    };

















    return ( 
        <section id='faq' className={styles.faq}>
            <LazyLoadImage effect="blur" alt='FAQ Background image' src={faqImg}></LazyLoadImage>
            <span className={styles.gradient}></span>
            <div className={styles.div}><p>{langJson.subtitle}</p></div>
            <h2>{langJson.title}</h2>
            <div className={styles.faqWrapper}>
                <Faq
                    data={data}
                    styles={FaqStyles}
                    config={config}
                />
            </div>
        </section>
     );
}

export default FAQ;