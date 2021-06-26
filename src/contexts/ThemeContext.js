import React, { createContext } from "react";
import useThemeContext from "../hooks/useThemeContext";
export const ThemeContext = createContext();


export function ThemeProvider(props) {
    const [isDarkMood, changeTheme] = useThemeContext(false);
    return (
        <ThemeContext.Provider
            value={{ isDarkMood, changeTheme }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}




/* ----- High order component, we use it in class component only when we wanna use more than one context ------- */

// export const withThemeContext = Component => props => (
//     <ThemeContext.Consumer>
//         {value => <Component ThemeContext={value} {...props} />}
//     </ThemeContext.Consumer>
// )

