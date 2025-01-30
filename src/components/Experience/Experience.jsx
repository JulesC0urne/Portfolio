import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            position: "Développement Full Stack d'une application de gestion de projet",
            company: "SOLUTEC",
            location: "Paris",
            period: "Sep 2024 - Déc 2024",
            responsibilities: [
                "Utilisation du framework React.js pour le développement d'interfaces utilisateur dynamiques",
                "Mise en place d'une architecture en microservices avec spring boot",
                "Implémentation des bases de données PostgreSQL pour chaque microservices",
                "Conteneurisation de l'application avec Docker"
            ],
            technologies: ["React.js", "Spring Boot", "PostgreSQL", "Docker", "Microservices"]
        },
        {
            position: "Développement Full Stack d'une application de gestion de notes de frais",
            company: "SOLUTEC",
            location: "Lyon",
            period: "Avr 2023 - Sep 2023",
            responsibilities: [
                "Rédaction du dossier de cadrage de projet",
                "Utilisation du framework React.js pour le développement d'interfaces utilisateur dynamiques",
                "Développement de microservices avec Spring Boot",
                "Création de tests unitaires et de tests d'intégration pour garantir la fiabilité des fonctionnalités développées",
                "Conteneurisation de l'application avec Docker"
            ],
            technologies: ["React.js", "Spring Boot", "Docker", "Tests unitaires", "Tests d'intégration"]
        },
        {
            position: "Développement d'un système de segmentation audio-vidéo",
            company: "LIFAT",
            location: "Tours",
            period: "Juin 2022 - Sep 2022",
            responsibilities: [
                "Conception et développement d'un système de segmentation audio-vidéo pour l'analyse de contenu multimédia",
                "Mise en place d'outils de structuration de données et d'indexation pour faciliter la recherche et la navigation",
                "Optimisation des algorithmes de segmentation pour une meilleure précision et rapidité d'analyse"
            ],
            technologies: ["Traitement audio-vidéo", "Structuration de données", "Algorithmes d'optimisation"]
        }
    ];

    return (
        <Box sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: 'grey.50',
            minHeight: '100vh'
        }}>
            {/* En-tête */}
            <Typography variant="h4" sx={{
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 4
            }}>
                <Briefcase size={32} />
                Expériences Professionnelles
            </Typography>

            {/* Timeline des expériences */}
            <Timeline position="right" sx={{ p: 0 }}>
                {experiences.map((exp, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color="primary" sx={{ p: 1 }}>
                                <Briefcase size={20} />
                            </TimelineDot>
                            {index < experiences.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>

                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Card sx={{
                                transition: 'box-shadow 0.3s, transform 0.3s ease',
                                '&:hover': {
                                    boxShadow: 6,
                                    transform: 'translateY(-4px)'
                                },
                            }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{
                                        color: 'primary.main',
                                        fontWeight: 'bold',
                                        mb: 1
                                    }}>
                                        {exp.position}
                                    </Typography>

                                    <Box sx={{
                                        display: 'flex',
                                        gap: 3,
                                        mb: 2,
                                        color: 'text.secondary',
                                        flexWrap: 'wrap'
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <Briefcase size={16} />
                                            {exp.company}
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <MapPin size={16} />
                                            {exp.location}
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <Calendar size={16} />
                                            {exp.period}
                                        </Box>
                                    </Box>

                                    <Box component="ul" sx={{
                                        listStyleType: 'none',
                                        pl: 0,
                                        '& > li': {
                                            mb: 1,
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 1
                                        }
                                    }}>
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i}>
                                                <ChevronRight size={16} style={{ marginTop: '4px', color: '#666' }} />
                                                <Typography variant="body2">{resp}</Typography>
                                            </li>
                                        ))}
                                    </Box>

                                    <Box sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 1,
                                        mt: 2
                                    }}>
                                        {exp.technologies.map((tech, i) => (
                                            <Chip
                                                key={i}
                                                label={tech}
                                                size="small"
                                                sx={{
                                                    backgroundColor: 'primary.light',
                                                    color: 'primary.main',
                                                    '&:hover': { backgroundColor: 'primary.light' }
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
};

export default Experience;