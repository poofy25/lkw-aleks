import styles from './footer.module.css'

import logo from '/src/assets/svg/logo_black.svg'
import facebook from '/src/assets/svg/facebook.svg'
import location from '/src/assets/svg/location.svg'
import email from '/src/assets/svg/email.svg'
import call from '/src/assets/svg/call.svg'

function Footer() {
    return ( 
        <footer>

            <section className={styles.content}>
                <article className={styles.company}>
                    <img src={logo}/>
                    <p>Oferim transport internațional și expediție în regim de grupaj și exclusiv (de la 10kg până la 23000kg) și asigurăm cel mai bun suport, consultanţă gratuită şi soluţii avantajoase pentru solicitările dumneavoastră. Contactează-ne acum pentru a afla cum putem să îți susținem afacerea.</p>
                    <h4>PROGRAM DE LUCRU</h4>
                    <p>{'Luni–Vineri 08:30–17:30'}</p>
                </article>
              

                <article className={styles.navigation}>
                    <h3>Navigheaza</h3>
                    <a href='acasa'  className={styles.navFirstA}>Acasă</a>
                    <a href='desprenoi'>Despre Noi</a>
                    <a href='servicii'>Servicii</a>
                    <a href='decenoi'>De Ce Noi</a>
                    <a href='certificate'>Certificate</a>
                    <a href='contact'>Contact</a>
                </article>

                <article className={styles.contact}>
                    <h3>Contacteză-ne</h3>
                    <div>
                        <img src={location}/>
                        <span>
                            <p>Adresa</p>
                            <a href='#contact'>bd. Traian 22, Chișinău</a>
                        </span>
                    </div>
                    <div>
                        <img src={call}/>
                        <span>
                            <p>Telefon</p>
                            <a href='tel:+373 69 150 150'>+373 69 150 150</a>
                        </span>
                    </div>
                    <div>
                        <img src={location}/>
                        <span>
                            <p>Adresa</p>
                            <a href='#contact'>bd. Țuțora 9B, Iași</a>
                        </span>
                    </div>
                    <div>
                        <img src={call}/>
                        <span>
                            <p>Telefon</p>
                            <a href='tel:+40 758 074 350 '>+40 758 074 350 </a>
                        </span>
                    </div>
                    <div>
                        <img src={email}/>
                        <span>
                            <p>Email</p>
                            <a href='mailto:info@lkw-aleks.com'>info@lkw-aleks.com</a>
                        </span>
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