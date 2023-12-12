import styles from './navBarMenu.module.css'

import { useEffect } from 'react';

import location from '/src/assets/svg/location.svg'
import email from '/src/assets/svg/email.svg'
import call from '/src/assets/svg/call.svg'
import facebook from '/src/assets/svg/facebook.svg'

import roFlag from '/src/assets/svg/romania.svg'
import ruFlag from '/src/assets/svg/ru.svg'
import enFlag from '/src/assets/svg/gb.svg'

function NavBarMenu({status}) {


    useEffect(()=>{
        const menu = document.querySelector(`.${styles.menu}`)
        if(menu){
            console.log(status , menu)
            if(status){
                menu.classList.add(`${styles.active}`)
            }else{
                menu.classList.remove(`${styles.active}`)
            }
        }
    },[status])

    return ( 

        <section className={styles.menu}>

            <section className={styles.menuContent}>
            <a href='#acasa'>Acasa</a>
            <a href='#desprenoi'>Despre Noi</a>
            <a href='#servicii'>Servicii</a>
            <a href='#decenoi'>De Ce Noi</a>
            <a href='#certificate'>Certificate</a>
            <a href='#recenzii'>Recenzii</a>
            <a href='#faq'>Intrebari Fregvente</a>
            <a className={styles.lasta} href='#contact'>Contact</a>
            <section className={styles.languages}>
                <button className={styles.active}><img src={roFlag}/>RO</button>
                <button><img src={ruFlag}/>RU</button>
                <button><img src={enFlag}/>EN</button>
            </section>
            <span><img src={call}/><a href='tel:+37369150150'>+373 69 150 150</a></span>
            <span><img src={call}/><a href='tel:+40758074350'>+40 758 074 350</a></span>
            <span><img src={email}/><a href='mailto:info@lkw-aleks.com'>info@lkw-aleks.com</a></span>
            <div className={styles.social}><img src={facebook}/></div>

            </section>

        </section>


    );
}

export default NavBarMenu;