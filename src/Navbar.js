import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyle';
import { Switch } from '@material-ui/core';
import { ThemeContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';


const words = {
    english: {
        search: "Search...",
        mood1: "light",
        mood2: "Dark"
    },
    arabic: {
        search: "...ابحث",
        mood1: "الوضع الصباحي",
        mood2: "الوضع الليلي"
    },
    spanish: {
        search: "Buscar...",
        mood1: "Ligera",
        mood2: "oscura"
    }
}

class Navbar extends Component {
    static contextType = ThemeContext;
    render () {
        const { isDarkMood, changeTheme } = this.context;
        const { classes } = this.props;
        const { language } = this.props.languageContext;
        const { search, mood1, mood2 } = words[language];
        return (
            <div className={classes.root}>
                <AppBar position="static" color={isDarkMood ? "default" : "primary"}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span><i className="fas fa-language"> {language}</i></span>
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit">
                            {/* App Title */}
                        </Typography>
                        <Switch onClick={changeTheme} />
                        <Typography>{isDarkMood ? mood2 : mood1}</Typography>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder={search}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withLanguageContext(withStyles(styles)(Navbar));