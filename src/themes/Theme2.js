import { createTheme } from '@mui/material/styles';

const theme2 = createTheme({
    palette: {
        primary: {
            main: '#F59E0B', // Orange-500
            light: '#FBBF24', // Orange-400
            dark: '#D97706', // Orange-700
            contrastText: '#000000',
        },
        secondary: {
            main: '#10B981', // Emerald-500
            light: '#6EE7B7', // Emerald-300
            dark: '#047857', // Emerald-700
        },
        background: {
            default: '#111827', // Gris très foncé (fond global)
            paper: '#1F2937', // Gris foncé (cartes)
        },
        text: {
            primary: '#F9FAFB', // Blanc cassé
            secondary: '#D1D5DB', // Gris clair
        },
        action: {
            hover: '#374151', // Gris foncé au hover (évite le blanc)
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
        h4: {
            fontWeight: 700,
            fontSize: '2rem',
        },
        h6: {
            fontWeight: 600,
            fontSize: '1.25rem',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '0.75rem',
                    backgroundColor: '#1F2937', // Gris foncé constant
                    color: '#F9FAFB', // Texte blanc
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        backgroundColor: '#374151', // Un peu plus clair au survol
                        boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.3)',
                        transform: 'translateY(-4px)',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                },
                contained: {
                    backgroundColor: '#F59E0B', // Orange principal
                    color: '#000000',
                    '&:hover': {
                        backgroundColor: '#D97706', // Orange plus foncé au hover
                    },
                },
            },
        },
    },
});

export default theme2;
