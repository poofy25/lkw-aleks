import styles from './navBar.module.css'

import logoIMG from '/src/assets/svg/logo_black.svg'

function NavBar() {
    return ( 
        <nav>
            <section className={styles.logoBar}><img src={logoIMG}/></section>
            <section className={styles.contactBar}>
                <span className={styles.info}>
                    <a><img/>bd. Traian 22, Chisinau</a>
                    <a href='mailto:info@lkw-aleks.com'><img/>info@lkw-aleks.com</a>
                    <a href='tel:+37369150150'><img/>+373 69 150 150</a>
                </span>
                <a className={styles.iconLink}><img/></a>
                <a className={styles.contactsBtn}>{'Contacte >'}</a>
            </section>
            <section className={styles.navigationBar}>
                <a>Acasa</a>
                <a>Despre Noi</a>
                <a>Servicii</a>
                <a>Recenzii</a>
                <a>Contact</a>
                <label for="language"></label> 
                <select name="language" id="language"> 
                    <option value="RO">RO</option> 
                    <option value="RU">RU</option> 
                    <option value="EN">EN</option> 
                </select>
            </section>
        </nav>
     );
}

export default NavBar;