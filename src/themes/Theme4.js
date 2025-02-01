import { createTheme } from '@mui/material/styles';

const theme4 = createTheme({
    palette: {
        primary: {
            main: '#D32F2F', // Rouge vibrant pour la couleur principale
            light: '#FF6659', // Rouge clair pour les éléments secondaires
            dark: '#9A0007', // Rouge plus foncé pour les accents
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#1976D2', // Bleu vif pour une teinte secondaire dynamique
            light: '#63A4FF', // Bleu clair pour les accents secondaires
            dark: '#004BA0', // Bleu plus foncé pour la profondeur
        },
        background: {
            default: '#121212', // Fond très sombre pour un contraste moderne
            paper: '#1D1D1D', // Papier de fond légèrement plus clair
        },
        text: {
            primary: '#FFFFFF', // Texte clair pour contraster avec le fond sombre
            secondary: '#B0BEC5', // Texte secondaire plus doux pour un meilleur contraste
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif", // Police moderne et élégante
        h4: {
            fontWeight: 700,
            fontSize: '2.25rem',
            letterSpacing: '-0.5px',
        },
        h6: {
            fontWeight: 600,
            fontSize: '1.3rem',
            letterSpacing: '0.5px',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '0.5rem',
                    backgroundColor: '#1D1D1D', // Fond sombre pour les cartes
                    boxShadow: '0 1px 3px 0  rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.14)',
                    transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out, filter 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
                        transform: 'translateY(-4px)',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '50px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                },
                contained: {
                    backgroundColor: '#D32F2F', // Rouge comme couleur de fond
                    '&:hover': {
                        backgroundColor: '#FF6659', // Changement de couleur au survol
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                    },
                    '&:active': {
                        backgroundColor: '#9A0007', // Couleur lors du clic
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: '30px',
                    backgroundColor: '#1976D2', // Bleu pour les chips
                    color: '#FFFFFF', // Texte clair pour un meilleur contraste
                    fontWeight: 500,
                },
            },
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    backgroundColor: '#D32F2F', // Rouge vif pour les dots
                    boxShadow: 'none',
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#D32F2F', // Rouge pour les boutons d'icônes
                    '&:hover': {
                        backgroundColor: '#FF6659', // Effet de survol rouge clair
                    },
                    '&:active': {
                        backgroundColor: '#9A0007', // Couleur lors du clic
                    },
                },
            },
        },
    },
});

export default theme4;
