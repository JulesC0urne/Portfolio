import { createTheme } from '@mui/material/styles';

const theme1 = createTheme({
    palette: {
        primary: {
            main: '#3B82F6', // Blue-500 de Tailwind
            light: '#93C5FD', // Blue-300 de Tailwind
            megalight: '#BFDBFE',
            dark: '#1D4ED8', // Blue-700 de Tailwind
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#4B5563', // Gray-600 de Tailwind
            light: '#9CA3AF', // Gray-400 de Tailwind
            dark: '#1F2937', // Gray-800 de Tailwind
        },
        background: {
            default: '#F9FAFB', // Gray-50 de Tailwind
            paper: '#FFFFFF',
        },
        text: {
            primary: '#111827', // Gray-900 de Tailwind
            secondary: '#4B5563', // Gray-600 de Tailwind
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
                    '&:hover': {
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

export default theme1;