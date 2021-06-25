import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

class PageContent extends Component {
    static contextType = ThemeContext;
    render () {
        const { isDarkMood } = this.context;
        const styles = {
            backgroundColor: isDarkMood ? "black" : "#fafafa",
            height: "100vh",
            width: "100vw"
        };
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        )
    }
}

export default PageContent;
