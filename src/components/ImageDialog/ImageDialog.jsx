import React from 'react';
import { Dialog, IconButton, Box, Fade } from '@mui/material';
import { X } from 'lucide-react';

const ImageDialog = ({ open, onClose, selectedImage }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={false}
            TransitionComponent={Fade}
            TransitionProps={{
                timeout: 300
            }}
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    overflow: 'hidden'
                }
            }}
            BackdropProps={{
                sx: {
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(2px)',
                    transition: 'backdrop-filter 300ms'
                }
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
                    alignItems: 'center'
                }}
            >
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        color: 'white',
                        zIndex: 1,
                        backgroundColor: '#bbbbbb',
                        '&:hover': { backgroundColor: '#a6a6a6' }
                    }}
                >
                    <X size={24} />
                </IconButton>

                <img
                    src={selectedImage}
                    alt="Enlarged view"
                    style={{
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                        borderRadius: '8px',
                        objectFit: 'contain'
                    }}
                />
            </Box>
        </Dialog>
    );
};

export default ImageDialog;