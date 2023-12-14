import './languageDropdown.css'
import { useEffect , useState } from 'react';

import roFlag from '/src/assets/svg/romania.svg'
import ruFlag from '/src/assets/svg/ru.svg'
import enFlag from '/src/assets/svg/gb.svg'

import smallarrow from '/src/assets/svg/smallarrow.svg'

const flags = {
    RO:roFlag,
    RU:ruFlag,
    EN:enFlag
}

function LanguageDropdown({language , setLanguage}) {

    const [status , setStatus] = useState(false)


    const dropDownHandler = ()=>{
        setStatus(!status)
    }
    const languageClickHandler = (e , lang)=>{
        setStatus(false)
        if(language !== lang){
            setLanguage(lang)
            if(e.target.parentNode.childNodes){
            e.target.parentNode.childNodes.forEach(btn=>{
                btn.classList.remove('selected')
            })
            e.target.classList.add('selected')
            }
        }
    }


    useEffect(()=>{
        const dropdownContainer = document.querySelector('.languageDropdown')
        if(dropdownContainer){
            if(status){
                dropdownContainer.classList.add('active')
            }else{
                dropdownContainer.classList.remove('active')
            }
        }
    },[status])





    return ( 

        <div className='languageDropdownContainer'>
            <button aria-label='Language' onClick={dropDownHandler} className='currentLanguage'><img src={flags[language]}/>{language}</button>
            <img alt='Language Flag' onClick={dropDownHandler} src={smallarrow} className='languagearrow'></img>
            <span className='languageDropdown'>
                <button aria-label='Romanian' className='selected' onClick={(e)=>{languageClickHandler(e,'RO')}}><img alt='Romanian Flag' src={roFlag}/>RO</button>
                <button aria-label='Russian' onClick={(e)=>{languageClickHandler(e,'RU')}}><img alt='Russian Flag' src={ruFlag}/>RU</button>
                <button aria-label='English' onClick={(e)=>{languageClickHandler(e,'EN')}}><img alt='English Flag' src={enFlag}/>EN</button>
            </span>
        </div>

    );
}

export default LanguageDropdown