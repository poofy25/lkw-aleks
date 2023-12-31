import styles from './navBarMenu.module.css'

import { useEffect } from 'react';

import location from '/src/assets/svg/location.svg'
import email from '/src/assets/svg/email.svg'
import call from '/src/assets/svg/call.svg'
import facebook from '/src/assets/svg/facebook.svg'

import roFlag from '/src/assets/svg/romania.svg'
import ruFlag from '/src/assets/svg/ru.svg'
import enFlag from '/src/assets/svg/gb.svg'

function NavBarMenu({status , setStatus , language , setLanguage , langJson}) {


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

    const menuClick = (e)=>{
        if(e.target !== document.querySelector(`.${styles.menuContent}`
        )){
            setStatus(false)
        }
    }

    return ( 

        <section onClick={menuClick} className={styles.menu}>

            <section className={styles.menuContent}>
            <a onClick={()=>{setStatus(!status)}} href='#acasa'>{langJson.navigation.home}</a>
            <a onClick={()=>{setStatus(!status)}} href='#desprenoi'>{langJson.navigation.aboutus}</a>
            <a onClick={()=>{setStatus(!status)}} href='#servicii'>{langJson.navigation.services}</a>
            <a onClick={()=>{setStatus(!status)}} href='#decenoi'>{langJson.navigation.whyus}</a>
            <a onClick={()=>{setStatus(!status)}} href='#certificate'>{langJson.navigation.certificates}</a>
            <a onClick={()=>{setStatus(!status)}} href='#recenzii'>{langJson.navigation.testimonials}</a>
            <a onClick={()=>{setStatus(!status)}} href='#faq'>{langJson.navigation.faq}</a>
            <a onClick={()=>{setStatus(!status)}} className={styles.lasta} href='#contact'>{langJson.navigation.contact}</a>

            <section className={styles.languages}>
                <button onClick={()=>{setLanguage('RO')}} className={language==='RO' && styles.active}><img alt="Romanian Flag" src={roFlag}/>RO</button>
                <button onClick={()=>{setLanguage('RU')}} className={language==='RU' && styles.active}><img alt="Russian Flag" src={ruFlag}/>RU</button>
                <button onClick={()=>{setLanguage('EN')}} className={language==='EN' && styles.active}><img alt="English Flag" src={enFlag}/>EN</button>
            </section>

            <span><img alt="Call Icon" src={call}/><a href='tel:+37369150150'>+373 69 150 150</a></span>
            <span><img alt="Call Icon" src={call}/><a href='tel:+40758074350'>+40 758 074 350</a></span>
            <span><img alt="Email Icon" src={email}/><a href='mailto:info@lkw-aleks.com'>info@lkw-aleks.com</a></span>
            {/* <div className={styles.social}><img src={facebook}/></div> */}

            </section>

        </section>


    );
}

export default NavBarMenu;