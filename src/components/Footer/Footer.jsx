import styles from './footer.module.css'

import logo from '/src/assets/svg/logo_black.svg'
import facebook from '/src/assets/svg/facebook.svg'
import location from '/src/assets/svg/location.svg'
import email from '/src/assets/svg/email.svg'
import call from '/src/assets/svg/call.svg'

import ROJSON from '/src/languages/RO.json'
import RUJSON from '/src/languages/RU.json'
import ENJSON from '/src/languages/EN.json'

const languagesJson = {
  RO:ROJSON,
  RU:RUJSON,
  EN:ENJSON
}

function Footer({language}) {

    const langJson = languagesJson[language].footer


    return ( 
        <footer>

            <section className={styles.content}>
                <article className={styles.company}>
                    <img alt='Logo' src={logo}/>
                    <p>{langJson.company.text}</p>
                    <h4>{langJson.company.worktitle}</h4>
                    <p>{langJson.company.worktime}</p>
                </article>
              

                <article className={styles.navigation}>
                    <h3>{langJson.navigation.title}</h3>
                    <a href='#acasa'  className={styles.navFirstA}>{langJson.navigation.home}</a>
                    <a href='#desprenoi'>{langJson.navigation.aboutus}</a>
                    <a href='#servicii'>{langJson.navigation.services}</a>
                    <a href='#decenoi'>{langJson.navigation.whyus}</a>
                    <a href='#certificate'>{langJson.navigation.certificates}</a>
                    <a href='#recenzii'>{langJson.navigation.testimonials}</a>
                    <a href='#faq'>{langJson.navigation.faq}</a>
                    <a href='#contact'>{langJson.navigation.contact}</a>
                </article>

                <article className={styles.contact}>
                    <h3>{langJson.contact.title}</h3>
                    <div className={styles.contactWrapper}>
                        <h4>{langJson.contact.moldova}</h4>
                        <div>
                            <img alt='Location Icon' src={location}/>
                            <span>
                                <p>{langJson.contact.adress}</p>
                                <a href='#contact'>bd. Traian 22, Chișinău</a>
                            </span>
                        </div>
                        <div>
                            <img alt='Call Icon' src={call}/>
                            <span>
                                <p>{langJson.contact.phone}</p>
                                <a href='tel:+373 69 150 151'>+373 69 150 150</a>
                                <a href='tel:+373 69 150 151'>+373 69 150 151</a>
                                <a href='tel:+373 69 102 681'>+373 69 102 681</a>
                                <a href='tel:+373 78 000 155'>+373 78 000 155</a>
                            </span>
                        </div>
                        <div>
                        <img alt='Email Icon' src={email}/>
                        <span>
                            <p>{langJson.contact.email}</p>
                            <a href='mailto:info@lkw-aleks.com'>info@lkw-aleks.com</a>
                        </span>
                    </div>
                    </div>
                    <div className={styles.contactWrapper}>
                        <h4>{langJson.contact.romania}</h4>
                        <div>
                            <img  alt='Location Icon'src={location}/>
                            <span>
                                <p>{langJson.contact.adress}</p>
                                <a href='#contact'>bd. Țuțora 9B, Iași</a>
                            </span>
                        </div>
                        <div>
                            <img alt='Call Icon' src={call}/>
                            <span>
                                <p>{langJson.contact.phone}</p>
                                <a href='tel:+40 758 074 350 '>+40 758 074 350 </a>
                            </span>
                        </div>
                        <div>
                            <img alt='Email Icon' src={email}/>
                            <span>
                                <p>{langJson.contact.email}</p>
                                <a href='mailto:info@lkw-aleks.com'>info@lkw-aleks.com</a>
                            </span>
                        </div>
                    </div>
                </article>
            </section>
            <section className={styles.credits}>
                <p>© 2023 LKW-ALEKS Spedition</p>
                <p>Created by Buza Cristian</p>
            </section>

        </footer>


     );
}

export default Footer