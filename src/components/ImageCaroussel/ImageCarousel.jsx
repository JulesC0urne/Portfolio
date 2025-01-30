import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ImageDialog from '../ImageDialog/ImageDialog';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [openImageDialog, setOpenImageDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpenImage = (image) => {
        setSelectedImage(image);
        setOpenImageDialog(true);
    };

    const handleCloseImage = () => {
        setOpenImageDialog(false);
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
        <div className="relative w-full mt-2 mb-3">
            {/* Image container */}
            <div className="relative w-full overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <div key={index} className="w-full shrink-0 flex justify-center bg-gray-100">
                            <img
                                src={img}
                                onClick={() => handleOpenImage(img)}
                                alt={`Slide ${index + 1}`}
                                className="max-h-[500px] w-auto object-contain cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Flèches de navigation */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/80 shadow-md hover:bg-white"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-800" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/80 shadow-md hover:bg-white"
                    >
                        <ArrowRight className="w-5 h-5 text-gray-800" />
                    </button>
                </>
            )}

            {/* Points de position */}
            {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-500 w-2.5' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            )}
            <ImageDialog open={openImageDialog} onClose={handleCloseImage} selectedImage={selectedImage} />
        </div>
    );
};

export default ImageCarousel;