import React, { createContext } from 'react'
import useLanguageContext from '../hooks/useLanguageContext';
export const LanguageContext = createContext();


export function LanguageProvider(props) {
    const [language, changeLanguage] = useLanguageContext("english");

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    )
}


/* ----- High order component, we use it in class component only when we wanna use more than one context ------- */ 

// export const withLanguageContext = Component => props => (
//     <LanguageContext.Consumer>
//         {value => <Component languageContext={value} {...props} />}
//     </LanguageContext.Consumer>
// )
