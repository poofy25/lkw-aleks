import styles from './services.module.css'

import service1 from '/src/assets/img/service1.png'
import service2 from '/src/assets/img/service2.png'
import service3 from '/src/assets/img/service3.png'

function Services() {
    return ( 
        <section className={styles.services}>

            <div><p>Serviciile Noastre</p></div>
            <h2>Oferim Tot Felul De Servicii Logistice</h2>
            <section>
                <article>
                    <img src={service1}></img>
                    <section>
                        <h4>Transport National si International</h4>
                        <p>
                        Oferim servicii de transport de mărfuri la nivel național și internațional, asigurându-ne că bunurile dvs. ajung în condiții optime la destinație. Cu parteneriate solide, o rețea extinsă și o echipă personalizată, suntem capabili să gestionăm orice itinerariu, indiferent de complexitatea acestuia.
                        </p>
                        <span>01</span>
                    </section>
                </article>
                <article>
                    <img src={service2}></img>
                    <section>
                        <h4>Logistica Personalizata</h4>
                        <p>
                        Înțelegem că fiecare afacere are cerințe specifice. Prin urmare, oferim soluții de logistică personalizate, adaptate nevoilor dvs. individuale. De la gestionarea stocurilor la planificarea itinerariilor și gestionarea documentației vamale, suntem aici pentru a face procesul de transport cât mai ușor și eficient posibil.
                        </p>
                        <span>02</span>
                    </section>
                </article>
                <article>
                    <img src={service3}></img>
                    <section>
                        <h4>Flota Moderna si Tehnologie Avansata</h4>
                        <p>
                        Investim constant în flota noastră pentru a asigura siguranța, securitatea și eficiența în fiecare transport. Vehiculele noastre sunt dotate cu sisteme avansate de urmărire și gestionare a flotei pentru a vă oferi informații în timp real despre stadiul transportului dvs.
                        </p>
                        <span>03</span>
                    </section>
                </article>
            </section>

        </section>
     );
}

export default Services;