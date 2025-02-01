import React, { useState, useContext } from 'react';
import { Box, Button, Paper, Collapse, IconButton } from '@mui/material';
import { Palette, ChevronRight } from 'lucide-react';
import { ThemeContext } from '../../themes/ThemeProvider';

const ThemeSelector = () => {
    const { currentTheme, setTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    const themes = [
        { id: 'theme1', name: 'Thème 1', color: '#3B82F6' },
        { id: 'theme2', name: 'Thème 2', color: '#F59E0B' },
        { id: 'theme3', name: 'Thème 3', color: '#8B5CF6' },
        { id: 'theme4', name: 'Thème 4', color: '#D32F2F' }
    ];

    return (
        <Box
            sx={{
                position: 'fixed',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Collapse in={isOpen} orientation="horizontal">
                <Paper
                    elevation={3}
                    sx={{
                        p: 2,
                        mr: 1,
                        borderRadius: '12px 0 0 12px',
                        backgroundColor: 'background.paper',
                    }}
                >
                    {themes.map((theme) => (
                        <Button
                            key={theme.id}
                            onClick={() => setTheme(theme.id)}  // ✅ Correction ici
                            variant={currentTheme === theme.id ? "contained" : "outlined"}
                            size="small"
                            sx={{
                                mb: 1,
                                display: 'block',
                                minWidth: '140px',
                                backgroundColor: currentTheme === theme.id ? theme.color : 'transparent',
                                borderColor: theme.color,
                                color: currentTheme === theme.id ? 'white' : theme.color,
                                '&:hover': {
                                    backgroundColor: theme.color,
                                    color: 'white',
                                    opacity: 0.9
                                }
                            }}
                        >
                            {theme.name}
                        </Button>
                    ))}
                </Paper>
            </Collapse>

            <IconButton
                onClick={() => setIsOpen(!isOpen)}
                sx={{
                    backgroundColor: 'background.default',
                    borderRadius: '12px 0 0 12px',
                    boxShadow: 3,
                    '&:hover': {
                        backgroundColor: 'action.hover'
                    }
                }}
            >
                {isOpen ? <ChevronRight size={24} /> : <Palette size={24} />}
            </IconButton>
        </Box>
    );
};

export default ThemeSelector;
