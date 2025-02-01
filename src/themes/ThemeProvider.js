import React, { createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme1 from './Theme1';
import theme2 from './Theme2';
import theme3 from './Theme3';
import theme4 from './Theme4';

export const ThemeContext = createContext({
    currentTheme: 'theme1',
    setTheme: () => { },
});

const themes = { theme1, theme2, theme3, theme4 };

const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(
        localStorage.getItem('theme') || 'theme1'
    );

    useEffect(() => {
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    const theme = useMemo(() => themes[currentTheme], [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
