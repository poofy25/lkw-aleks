import styles from './faq.module.css'
import Faq from "react-faq-component";
import './faqComponent.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import faqImg from '/src/assets/img/faq.png'

function FAQ() {



    const data = {
        rows: [
            {
                title: <h4 className='faqh4'>Care sunt destinațiile acoperite de serviciile LKW-ALEKS Spedition?</h4>,
                content: <p className='faqp'>Oferim tarife competitive de transport marfă cu camioane complete atît pentru export, cît şi pentru import, atît în, cît şi din ţări precum Portugalia, Spania, Franţa, Anglia, Belgia, Olanda, Germania, Danemarca, Suedia, Norvegia, Finlanda, Lituania, Letonia, Estonia, Italia, Elveţia, Austria, Cehia, Slovacia, Polonia, Ungaria, Bulgaria, Slovenia, Croaţia, Serbia, Turcia, Ucraina, Rusia, Romania, Kazahstan, Turkmenistan, Kirghizstan, Armenia, Georgia, ș.a.</p>,
            },
            {
                title: <h4 className='faqh4'>Cum pot obține o ofertă personalizată?</h4>,
                content:<p className='faqp'>Pentru a obține o ofertă personalizată, contactați-ne prin telefon la +373 69 150 150 sau +373 69 150 151 sau prin e-mail la info@lkw-aleks.com, iar echipa noastră vă va oferi consultanță personalizată, identificând cele mai potrivite soluții pentru cerințele dumneavoastră.</p>
            },
            {
                title: <h4 className='faqh4'>Ce baze convenții internaționale folosește LKW-ALEKS Spedition pentru executarea transporturilor?</h4>,
                content: <p className='faqp'>Executăm transporturile în baza convențiilor internaționale CMR (Convenția privind Contractul de Transport Rutier Internațional de Mărfuri) și TIR (Convenţia vamală relativă la transportul internaţional de mărfuri sub acoperirea carnetului TIR).</p>,
            },
            {
                title: <h4 className='faqh4'>Care sunt avantajele colaborării pe termen lung cu LKW-ALEKS Spedition?</h4>,
                content: <p className='faqp'>Colaborarea pe termen lung cu noi aduce beneficii precum tarife competitive, prioritate în serviciile oferite, acces la facilități exclusive și consultanță specializată pentru optimizarea continuă a lanțului logistic.</p>,
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
            <LazyLoadImage effect="blur" src={faqImg}></LazyLoadImage>
            <span className={styles.gradient}></span>
            <div className={styles.div}><p>FAQ</p></div>
            <h2>Întrebari Frecvente</h2>
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