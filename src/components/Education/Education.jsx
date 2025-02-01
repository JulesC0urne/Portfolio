import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, Chip, CircularProgress } from '@mui/material';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { getEducation, subject } from '../../data/EducationData';

const Education = () => {
    const [education, setEducation] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const fetchedEducation = getEducation();
                setEducation(fetchedEducation);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch Education:", error);
                setIsLoading(false);
            }
        };

        fetchEducation();
    }, []);

    const InfoItem = ({ icon: Icon, text }) => (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: 'text.secondary',
            '& svg': {
                color: 'primary.main'
            }
        }}>
            <Icon size={16} />
            {text}
        </Box>
    );

    return (
        <Box sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: 'background.default',
            minHeight: '100vh'
        }}>
            {/* Header Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={(theme) => ({
                    fontWeight: theme.typography.fontWeightBold,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'text.primary',
                    '& svg': {
                        color: 'primary.main'
                    }
                })}>
                    <GraduationCap size={32} />
                    Formation
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
                    Mon parcours académique en {subject}
                </Typography>
            </Box>

            {/* Education Cards */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {isLoading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height={200}>
                        <CircularProgress />
                    </Box>
                ) : (
                    education.map((edu, index) => (
                        <Card key={index}>
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    gap: 3
                                }}>
                                    {/* Left Column */}
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="h6" sx={{
                                            color: 'primary.main',
                                            fontWeight: 'bold',
                                            mb: 2
                                        }}>
                                            {edu.degree}
                                        </Typography>

                                        <Box sx={{
                                            display: 'flex',
                                            gap: 2,
                                            mb: 2
                                        }}>
                                            <InfoItem icon={Calendar} text={edu.period} />
                                            <InfoItem icon={MapPin} text={edu.location} />
                                        </Box>

                                        <Typography sx={{
                                            fontWeight: 600,
                                            color: 'text.primary',
                                            mb: 2
                                        }}>
                                            {edu.school}
                                        </Typography>

                                        <Typography variant="body2" sx={{
                                            color: 'text.secondary',
                                            mb: 3
                                        }}>
                                            {edu.description}
                                        </Typography>

                                        {/* Achievements Section */}
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 600,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                                mb: 1,
                                                '& svg': {
                                                    color: 'primary.main'
                                                }
                                            }}>
                                                <Award size={16} />
                                                Réalisations clés
                                            </Typography>
                                            <Box component="ul" sx={{
                                                listStyleType: 'disc',
                                                pl: 2,
                                                '& > li': {
                                                    mb: 0.5,
                                                    color: 'text.secondary'
                                                }
                                            }}>
                                                {edu.achievements.map((achievement, i) => (
                                                    <li key={i}>{achievement}</li>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Box>

                                    {/* Right Column - Skills */}
                                    <Box sx={{
                                        width: { xs: '100%', md: '30%' },
                                        borderLeft: { md: 1 },
                                        borderColor: { md: 'divider' },
                                        pl: { md: 3 }
                                    }}>
                                        <Typography sx={{
                                            fontWeight: 600,
                                            mb: 2,
                                            color: 'text.primary'
                                        }}>
                                            Compétences acquises
                                        </Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 1
                                        }}>
                                            {edu.skills.map((skill, i) => (
                                                <Chip
                                                    key={i}
                                                    label={skill}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: 'primary.light',
                                                        color: 'primary.dark',
                                                        fontWeight: 500
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))
                )}
            </Box>
        </Box>
    );
};

export default Education;