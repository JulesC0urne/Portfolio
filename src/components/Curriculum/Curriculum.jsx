import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Curriculum = () => {
    return (
        <Box
            className="flex-1 p-6 space-y-6 overflow-y-auto"
            sx={{
                backgroundColor: 'background.default', // Utilisation du thème pour la couleur de fond
            }}
        >
            <Card sx={{ boxShadow: 3 }}>
                <CardContent sx={{ p: 6 }}>
                    <Box className="flex justify-between items-center mb-6">
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                            Mon CV
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '100%',
                        aspectRatio: '1 / 1.414',
                        maxHeight: '842px',
                        backgroundColor: 'white',
                        boxShadow: 1
                    }}>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/cv.pdf`}
                            className="w-full h-full"
                            title="CV"
                            style={{ border: 'none' }}
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Curriculum;
