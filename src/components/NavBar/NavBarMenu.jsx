import styles from './navBarMenu.module.css'

import { useEffect } from 'react';

import location from '/src/assets/svg/location.svg'
import email from '/src/assets/svg/email.svg'
import call from '/src/assets/svg/call.svg'
import facebook from '/src/assets/svg/facebook.svg'

import roFlag from '/src/assets/svg/romania.svg'
import ruFlag from '/src/assets/svg/ru.svg'
import enFlag from '/src/assets/svg/gb.svg'

function NavBarMenu({status , setStatus , language , setLanguage}) {


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
            <a onClick={()=>{setStatus(!status)}} href='#acasa'>Acasă</a>
            <a onClick={()=>{setStatus(!status)}} href='#desprenoi'>Despre Noi</a>
            <a onClick={()=>{setStatus(!status)}} href='#servicii'>Servicii</a>
            <a onClick={()=>{setStatus(!status)}} href='#decenoi'>De Ce Noi</a>
            <a onClick={()=>{setStatus(!status)}} href='#certificate'>Certificate</a>
            <a onClick={()=>{setStatus(!status)}} href='#recenzii'>Recenzii</a>
            <a onClick={()=>{setStatus(!status)}} href='#faq'>Intrebari Frecvente</a>
            <a onClick={()=>{setStatus(!status)}} className={styles.lasta} href='#contact'>Contact</a>

            <section className={styles.languages}>
                <button onClick={()=>{setLanguage('RO')}} className={language==='RO' && styles.active}><img src={roFlag}/>RO</button>
                <button onClick={()=>{setLanguage('RU')}} className={language==='RU' && styles.active}><img src={ruFlag}/>RU</button>
                <button onClick={()=>{setLanguage('EN')}} className={language==='EN' && styles.active}><img src={enFlag}/>EN</button>
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