import styles from './services.module.css'

import service1 from '/src/assets/img/service1.png'
import service2 from '/src/assets/img/service2.png'
import service3 from '/src/assets/img/service3.png'
import service4 from '/src/assets/img/service4.png'
import service5 from '/src/assets/img/service5.png'
import service7 from '/src/assets/img/service7.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Services() {
    return ( 
        <section id='servicii' className={styles.services}>

            <div><p>Serviciile Noastre</p></div>
            <h2>Soluții personalizate pentru orice solicitare</h2>
            <p>LKW-ALEKS Spedition oferă o gamă variată de soluții integrate de depozitare, distribuție si transport, în toate regiunile lumii, rapid și accesibil!</p>
            <section>
                <article>
                <LazyLoadImage effect="blur" src={service1}></LazyLoadImage>
                    <section>
                        <h4>Transport Rutier Internațional</h4>
                        <p>
                        Oferim servicii de transport rutier în regim de grupaj și exclusiv, acoperind o gamă variată de greutăți, de la 10 kg până la 23.000 kg, către numeroase destinații din Europa și Asia: Portugalia, Spania, Franța, Anglia, Belgia, Olanda, Germania, Danemarca, Suedia, Norvegia, Finlanda, Lituania, Letonia, Estonia, Italia, Elveția, Austria, Cehia, Slovacia, Polonia, Ungaria, Bulgaria, Slovenia, Croația, Serbia, Turcia, Ucraina, Rusia, România, Kazakhstan, Turkmenistan, Kirghizstan, Armenia și Georgia ș.a.
                        </p>
                        <span>01</span>
                    </section>
                </article>
                <article>
                    <LazyLoadImage effect="blur" src={service3}></LazyLoadImage>
                    <section>
                        <h4>Transport de Mărfuri Generale</h4>
                        <p>
                        Transportul de mărfuri generale reprezintă o soluție versatilă și flexibilă pentru bunurile și produsele care nu necesită condiții speciale de manipulare sau depozitare. Mărfurile generale pot fi transportate folosind o varietate de mijloace de transport standard, cum ar fi camioane cu semiremorcă prelată, dube, autocamioane, camionete sau autobasculante. Această diversitate de vehicule ne permite să alegem cea mai potrivită opțiune în funcție de nevoile specifice ale fiecărui client.
                        </p>
                        <span>02</span>
                    </section>
                </article>
                <article>
                    <LazyLoadImage effect="blur" src={service4}></LazyLoadImage>
                    <section>
                        <h4>Transport de Mărfuri Periculoase (ADR)</h4>
                        <p>
                        Mărfurile periculoase, conform Convenției ADR, includ substanțe și obiecte care, din cauza caracteristicilor lor fizice, chimice sau biologice, prezintă riscuri semnificative pentru sănătate, siguranță și mediu. Transportul mărfurilor periculoase necesită o atenție deosebită și abordări specializate. Înțelegem importanța asigurării unui proces de transport sigur, astfel încât fiecare expediție să fie gestionată cu responsabilitate și profesionalism.
                        </p>
                        <span>03</span>
                    </section>
                </article>
                <article>
                    <LazyLoadImage effect="blur" src={service5}></LazyLoadImage>
                    <section>
                        <h4>Transport Agabaritic</h4>
                        <p>
                        Transportul agabaritic reprezintă soluția ideală atunci când marfa depășește limitele standard de dimensiuni sau greutate aferente transportului rutier obișnuit. Indiferent de tipul de încărcătură, echipa noastră de specialiști identifică traseul potrivit și alege camionul ideal pentru a asigura că fiecare transport se desfășoară cu succes.
                        </p>
                        <span>04</span>
                    </section>
                </article>
                <article>
                    <LazyLoadImage effect="blur" src={service7}></LazyLoadImage>
                    <section>
                        <h4>Transport Frigorific</h4>
                        <p>
                        Oferim servicii complete de transport frigorific pentru mărfuri congelate și perisabile, asigurând temperaturi controlate între -18°C și 20°C. Echipate cu tehnologie de vârf, camioanele noastre sunt dotate cu sisteme avansate de control al temperaturii, garantând păstrarea integrității produselor de la punctul de plecare până la destinație.
                        </p>
                        <span>05</span>
                    </section>
                </article>
                <article>
                    <LazyLoadImage effect="blur" src={service2}></LazyLoadImage>
                    <section>
                        <h4>Servicii de logistică</h4>
                        <p>
                        Oferim nu doar servicii de transport, ci și o gamă completă de servicii auxiliare pentru a vă facilita și optimiza întregul lanț logistic. Printre acestea se numără depozitarea, distribuția internă sau intracomunitară a mărfurilor și intermedierea formalităților vamale. Cu accent pe calitate și eficiență, este prioritatea noastră să oferim soluții complete și personalizate pentru fiecare aspect al logisticii.
                        </p>
                        <span>06</span>
                    </section>
                </article>
            </section>

        </section>
     );
}

export default Services;