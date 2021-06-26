import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';


function PageContent(props) {
    const { isDarkMood } = useContext(ThemeContext);
    const styles = {
        backgroundColor: isDarkMood ? "black" : "#fafafa",
        height: "100vh",
        width: "100vw"
    };

    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default PageContent;
