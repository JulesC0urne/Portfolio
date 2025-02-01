import React, { useState } from 'react';
import {
    Box,
    IconButton,
    Dialog,
    DialogContent,
    Paper,
    useTheme,
    styled,
    Fade
} from '@mui/material';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

// Styled components
const CarouselContainer = styled(Paper)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[100]
}));

const SlideContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    transition: 'transform 300ms ease-in-out',
    '& img': {
        maxHeight: 500,
        width: 'auto',
        objectFit: 'contain',
        cursor: 'pointer'
    }
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
    },
    padding: theme.spacing(1),
    boxShadow: theme.shadows[2]
}));

const DotContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: theme.spacing(2),
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: theme.spacing(0.5)
}));

const Dot = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'active'
})(({ theme, active }) => ({
    width: active ? 20 : 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[300],
    transition: 'all 300ms ease-in-out'
}));

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const theme = useTheme();

    const handleOpenImage = (image) => {
        setSelectedImage(image);
        setOpenDialog(true);
    };

    const handleCloseImage = () => {
        setOpenDialog(false);
        setSelectedImage(null);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    if (!images || images.length === 0) return null;

    return (
        <CarouselContainer elevation={2}>
            {/* Images container */}
            <SlideContainer
                sx={{
                    transform: `translateX(-${currentIndex * 100}%)`
                }}
            >
                {images.map((img, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '100%',
                            flexShrink: 0,
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            onClick={() => handleOpenImage(img)}
                        />
                    </Box>
                ))}
            </SlideContainer>

            {/* Navigation arrows */}
            {images.length > 1 && (
                <>
                    <NavigationButton
                        onClick={prevSlide}
                        sx={{ left: theme.spacing(2) }}
                        size="small"
                    >
                        <ArrowLeft />
                    </NavigationButton>
                    <NavigationButton
                        onClick={nextSlide}
                        sx={{ right: theme.spacing(2) }}
                        size="small"
                    >
                        <ArrowRight />
                    </NavigationButton>
                </>
            )}

            {/* Navigation dots */}
            {images.length > 1 && (
                <DotContainer>
                    {images.map((_, index) => (
                        <Dot
                            key={index}
                            active={currentIndex === index}
                            onClick={() => setCurrentIndex(index)}
                            sx={{ cursor: 'pointer' }}
                        />
                    ))}
                </DotContainer>
            )}

            {/* Full screen dialog with background overlay */}
            <Dialog
                open={openDialog}
                onClose={handleCloseImage}
                maxWidth="xl"
                fullWidth
                TransitionComponent={Fade}
                TransitionProps={{
                    timeout: 300,
                }}
                PaperProps={{
                    sx: {
                        backgroundColor: 'transparent', // Transparent background for the dialog
                        boxShadow: 'none', // Remove default box shadow
                    }
                }}
                BackdropProps={{
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark backdrop with transparency
                        backdropFilter: 'blur(5px)', // Apply blur to the background
                    }
                }}
            >
                <DialogContent
                    sx={{
                        padding: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative', // So the close button can be positioned
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={handleCloseImage}
                        sx={{
                            position: 'absolute',
                            top: theme.spacing(2),
                            right: theme.spacing(2),
                            color: 'common.white',
                            backgroundColor: theme.palette.primary.main,
                            zIndex: theme.zIndex.modal + 1,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
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

                    {/* Enlarged image */}
                    {selectedImage && (
                        <Box
                            component="img"
                            src={selectedImage}
                            alt="Full size"
                            sx={{
                                maxHeight: '90vh',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                borderRadius: theme.shape.borderRadius,
                                boxShadow: theme.shadows[24], // Apply shadow for depth
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
                    )}
                </DialogContent>
            </Dialog>
        </CarouselContainer>
    );
};

export default ImageCarousel;
