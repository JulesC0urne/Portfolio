import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, Chip, CircularProgress } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { getExperiences } from '../../data/ExperienceData';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const fetchedExperiences = getExperiences();
                setExperiences(fetchedExperiences);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch Experiences:", error);
                setIsLoading(false);
            }
        };

        fetchExperiences();
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
            <Typography variant="h4" sx={(theme) => ({
                fontWeight: theme.typography.fontWeightBold,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 4,
                color: 'text.primary',
                '& svg': {
                    color: 'primary.main'
                }
            })}>
                <Briefcase size={32} />
                Expériences Professionnelles
            </Typography>

            {/* Timeline Section */}
            <Timeline position="right" sx={{ p: 0 }}>
                {isLoading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height={200}>
                        <CircularProgress />
                    </Box>
                ) : (
                    experiences.map((exp, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot sx={{
                                    backgroundColor: 'primary.main',
                                    p: 1,
                                    boxShadow: 'none',
                                    '& svg': {
                                        color: 'common.white'
                                    }
                                }}>
                                    <Briefcase size={20} />
                                </TimelineDot>
                                {index < experiences.length - 1 && (
                                    <TimelineConnector sx={{ backgroundColor: 'primary.light' }} />
                                )}
                            </TimelineSeparator>

                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Card>
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography variant="h6" sx={{
                                            color: 'primary.main',
                                            fontWeight: 'bold',
                                            mb: 2
                                        }}>
                                            {exp.position}
                                        </Typography>

                                        <Box sx={{
                                            display: 'flex',
                                            gap: 3,
                                            mb: 3,
                                            flexWrap: 'wrap'
                                        }}>
                                            <InfoItem icon={Briefcase} text={exp.company} />
                                            <InfoItem icon={MapPin} text={exp.location} />
                                            <InfoItem icon={Calendar} text={exp.period} />
                                        </Box>

                                        <Box component="ul" sx={{
                                            listStyleType: 'none',
                                            pl: 0,
                                            mb: 3,
                                            '& > li': {
                                                mb: 2,
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: 1
                                            }
                                        }}>
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i}>
                                                    <ChevronRight
                                                        size={16}
                                                        style={{
                                                            marginTop: '4px',
                                                            color: 'var(--mui-color-primary-main)'
                                                        }}
                                                    />
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ color: 'text.secondary' }}
                                                    >
                                                        {resp}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </Box>

                                        <Box sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 1
                                        }}>
                                            {exp.technologies.map((tech, i) => (
                                                <Chip
                                                    key={i}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: 'primary.light',
                                                        color: 'primary.dark',
                                                        fontWeight: 500,
                                                        '&:hover': {
                                                            backgroundColor: 'primary.light'
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                )}
            </Timeline>
        </Box>
    );
};

export default Experience;