import React from 'react';
import { Dialog, IconButton, Box, Fade, useTheme } from '@mui/material';
import { X } from 'lucide-react';

const ImageDialog = ({ open, onClose, selectedImage }) => {
    const theme = useTheme();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={false}
            TransitionComponent={Fade}
            TransitionProps={{
                timeout: 300,
            }}
            PaperProps={{
                elevation: 0,
                sx: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    overflow: 'hidden',
                },
            }}
            BackdropProps={{
                sx: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Utilise des couleurs RGBA avec transparence
                    backdropFilter: 'blur(2px)',
                    transition: theme.transitions.create(['backdrop-filter', 'background-color'], {
                        duration: theme.transitions.duration.standard,
                    }),
                },
            }}
        >
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: theme.spacing(2),
                }}
            >
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: theme.spacing(2),
                        right: theme.spacing(2),
                        color: 'common.white',
                        backgroundColor: theme.palette.primary.main, // Utilisation du thème pour la couleur de fond
                        zIndex: theme.zIndex.modal + 1,
                        transition: theme.transitions.create(['background-color', 'transform'], {
                            duration: theme.transitions.duration.shortest,
                        }),
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark, // Utilisation du thème pour la couleur de fond au survol
                            transform: 'scale(1.1)',
                        },
                        '&:active': {
                            transform: 'scale(0.95)',
                        },
                    }}
                    size="large"
                >
                    <X size={24} />
                </IconButton>

                <Box
                    component="img"
                    src={selectedImage}
                    alt="Enlarged view"
                    sx={{
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                        borderRadius: theme.shape.borderRadius,
                        objectFit: 'contain',
                        boxShadow: theme.shadows[24], // Utilisation des ombres du thème
                        transition: theme.transitions.create('transform', {
                            duration: theme.transitions.duration.standard,
                        }),
                        animation: 'fadeIn 300ms ease-out',
                        '@keyframes fadeIn': {
                            from: {
                                opacity: 0,
                                transform: 'scale(0.9)',
                            },
                            to: {
                                opacity: 1,
                                transform: 'scale(1)',
                            },
                        },
                    }}
                />
            </Box>
        </Dialog>
    );
};

export default ImageDialog;
