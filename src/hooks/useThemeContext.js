import { useState } from "react";

function useThemeContext(initialvalue = false) {
    const [state, setstate] = useState(initialvalue);
    const changeTheme = () => {
        setstate( !state );
    }
    return [state, changeTheme];
}

export default useThemeContext;
