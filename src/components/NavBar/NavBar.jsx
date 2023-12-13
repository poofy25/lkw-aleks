import styles from './navBar.module.css'

import logoIMG from '/src/assets/svg/logo_black.svg'
import location from '/src/assets/svg/location.svg'
import email from '/src/assets/svg/email.svg'
import call from '/src/assets/svg/call.svg'

import NavBarMenu from './NavBarMenu'

import { useEffect, useState } from 'react'
import LanguageDropdown from './LanguageDropdown'

import ROJSON from '/src/languages/RO.json'
import RUJSON from '/src/languages/RU.json'
import ENJSON from '/src/languages/EN.json'

const languagesJson = {
  RO:ROJSON,
  RU:RUJSON,
  EN:ENJSON
}


function NavBar({width , language , setLanguage}) {


    const [menuActive , setMenuActive] = useState(false)
    const langJson = languagesJson[language].navbar
    console.log(langJson)

    const menuBtnHandler = ()=>{
        setMenuActive(!menuActive)
    }
    useEffect(()=>{
        if(width > 1200){
        const navBar = document.querySelector('nav')
        let lastScrollHeight = 0
        let lastScrollUp = 0;
        let lastScrollDown = 0
        window.addEventListener('scroll', (e)=>{
      
          if (lastScrollHeight > document.documentElement.scrollTop ){
            lastScrollUp = document.documentElement.scrollTop
            if(lastScrollUp < navBar.offsetHeight){
                navBar.classList.remove(styles.small)
            }
          }
          if ( lastScrollHeight < document.documentElement.scrollTop) {
            lastScrollDown = document.documentElement.scrollTop
          }
          if (lastScrollDown - lastScrollUp >= navBar.offsetHeight && lastScrollHeight > document.documentElement.scrollTop && navBar.classList.contains('NavbarActive')){
            navBar.classList.remove(styles.small)
          }
          if(lastScrollDown - lastScrollUp >= navBar.offsetHeight && lastScrollHeight < document.documentElement.scrollTop  && document.documentElement.scrollTop > navBar.offsetHeight ){
            navBar.classList.add(styles.small)
           }
          lastScrollHeight = document.documentElement.scrollTop
        })
      
        return ()=>{
            window.removeEventListener('scroll' , ()=>{})
        }
        }
      },[width])


    return ( 
        <nav className={styles.none}>
            <section className={styles.logoBar}><img src={logoIMG}/></section>
            <section className={styles.contactBar}>
                <span className={styles.contacts}>
                    <a href='mailto:info@lkw-aleks.com'><img src={email}/>info@lkw-aleks.com</a>
                    <a href='tel:+37369150151'><img src={call}/>+373 69 150 151</a>
                    <a href='tel:++40 758 074 350'><img src={call}/>+40 758 074 350</a>
                </span>
                <a className={styles.iconLink}><img/></a>
                <a href='#contact' className={styles.contactsBtn}>{'Contacte >'}</a>
            </section>
            <section className={styles.navigationBar}>
                <a href='#acasa'>{langJson.navigation.home}</a>
                <a href='#desprenoi'>{langJson.navigation.aboutus}</a>
                <a href='#servicii'>{langJson.navigation.services}</a>
                <a href='#decenoi'>{langJson.navigation.whyus}</a>
                <a href='#certificate'>{langJson.navigation.certificates}</a>
                <a href='#recenzii'>{langJson.navigation.testimonials}</a>
                <a href='#faq'>{langJson.navigation.faq}</a>
                <a href='#contact'>{langJson.navigation.contact}</a>
                {width > 992 ? 
                <>
                    <LanguageDropdown language={language} setLanguage={setLanguage}/>
                </>
                :
                <button onClick={menuBtnHandler} className={styles.menuBtn}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                }
                
            </section>
            <NavBarMenu status={menuActive} language={language} setLanguage={setLanguage}/>
        </nav>
     );
}

export default NavBar;