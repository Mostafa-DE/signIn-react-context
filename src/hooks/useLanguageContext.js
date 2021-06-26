import { useState } from 'react'

function useLanguageContext(initialState="english") {
    const [state, setstate] = useState(initialState);
    const changeLanguage =  (evnt) => {
        setstate( evnt.target.value );
    }

    return [state, changeLanguage];
}

export default useLanguageContext;
