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
            <button onClick={dropDownHandler} className='currentLanguage'><img src={flags[language]}/>{language}</button>
            <img onClick={dropDownHandler} src={smallarrow} className='languagearrow'></img>
            <span className='languageDropdown'>
                <button className='selected' onClick={(e)=>{languageClickHandler(e,'RO')}}><img src={roFlag}/>RO</button>
                <button onClick={(e)=>{languageClickHandler(e,'RU')}}><img src={ruFlag}/>RU</button>
                <button onClick={(e)=>{languageClickHandler(e,'EN')}}><img src={enFlag}/>EN</button>
            </span>
        </div>

    );
}

export default LanguageDropdown