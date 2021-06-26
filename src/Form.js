import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyle";
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from "./contexts/ThemeContext";

const words = {
    english: {
        signIn: "Sign In",
        email: "Email",
        password: "Password",
        remember: "Remember Me"
    },
    arabic: {
        signIn: "تسجيل الدخول",
        email: "البريد الإلكتروني",
        password: "الرقم السري",
        remember: "تذكرني"

    },
    spanish: {
        signIn: "iniciar sesión",
        email: "Correo Electrónico",
        password: "contraseña ",
        remember: "Recuérdame"
    }
}

function Form(props) {
    const { language, changeLanguage } = useContext(LanguageContext);
    const { isDarkMood } = useContext(ThemeContext);
    const { classes } = props;
    const { signIn, email, password, remember } = words[language];
    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
            <Avatar
                className={classes.avatar}
                style={{ backgroundColor: isDarkMood ? "#e8eaf6" : "#004ba0", margin: "1rem" }}
            >
                <LockOutlinedIcon style={{ color: isDarkMood ? "black" : null }} />
            </Avatar>
            <Typography variant='h5'>{signIn}</Typography>
            <Select value={language} onChange={changeLanguage}>
                <MenuItem value='english'>English</MenuItem>
                <MenuItem value='arabic'>Arabic</MenuItem>
                <MenuItem value='spanish'>Spanish</MenuItem>
            </Select>
            <form className={classes.form}>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='email'>{email}</InputLabel>
                    <Input id='email' name='email' autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='password'>{password}</InputLabel>
                    <Input id='password' name='password' autoFocus />
                </FormControl>
                <FormControlLabel
                    control={<Checkbox color='primary' />}
                    label={remember}
                />
                <Button
                    style={{ backgroundColor: isDarkMood ? "#e8eaf6" : "#002984", color: isDarkMood ? "black" : "white" }}
                    variant='contained'
                    type='submit'
                    fullWidth
                    className={classes.submit}
                >
                    {signIn}
                </Button>
            </form>
        </Paper>
    </main>
    )
}

export default withStyles(styles)(Form);

