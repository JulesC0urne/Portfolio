import { createTheme } from '@mui/material/styles';

const theme3 = createTheme({
    palette: {
        primary: {
            main: '#8B5CF6', // Violet-500 de Tailwind
            light: '#C4B5FD', // Violet-300 de Tailwind
            megalight: '#DDD6FE',
            dark: '#6D28D9', // Violet-700 de Tailwind
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#6B7280', // Gray-600 de Tailwind
            light: '#D1D5DB', // Gray-300 de Tailwind
            dark: '#374151', // Gray-800 de Tailwind
        },
        background: {
            default: '#4B4B64', // Couleur sombre (pas de blanc)
            paper: '#2D2D3D', // Un fond sombre pour les éléments comme les cartes
        },
        text: {
            primary: '#F3F4F6', // Texte clair pour contraste
            secondary: '#A3A3C2', // Gris clair pour le texte secondaire
        },
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
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
                    borderRadius: '0.5rem',
                    backgroundColor: '#2D2D3D', // Fond sombre pour les cartes
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                        transform: 'translateY(-4px)',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: '0.375rem',
                    fontWeight: 500,
                    backgroundColor: '#6B7280', // Gris foncé pour les chips
                    color: '#F3F4F6', // Texte clair pour les chips
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '0.375rem',
                    fontWeight: 600,
                },
                contained: {
                    boxShadow: 'none',
                    backgroundColor: '#6D28D9', // Couleur principale (violet foncé)
                    '&:hover': {
                        backgroundColor: '#8B5CF6', // Changement de couleur au survol
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    },
                },
            },
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
    },
});

export default theme3;
