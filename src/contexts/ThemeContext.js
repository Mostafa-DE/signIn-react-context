import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMood: false
        };
        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme () {
        this.setState({ isDarkMood: !this.state.isDarkMood });
    }

    render () {
        return (
            <ThemeContext.Provider
                value={{ ...this.state, changeTheme: this.changeTheme }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export const withThemeContext = Component => props => (
    <ThemeContext.Consumer>
        {value => <Component ThemeContext={value} {...props} />}
    </ThemeContext.Consumer>
)

