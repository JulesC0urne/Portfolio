import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Grid } from '@mui/material';
import { Code, Users, Brain, Terminal, Database } from 'lucide-react';

const Skills = () => {
    const technicalSkills = [
        {
            category: "Frontend Development",
            icon: <Code />,
            skills: [
                { name: "ReactJS", level: 85 },
                { name: "Javascript", level: 85 },
                { name: "Typescript", level: 80 },
                { name: "HTML", level: 90 },
                { name: "CSS", level: 85 },
                { name: "Python", level: 85 },
                { name: "Flask", level: 80 },
            ]
        },
        {
            category: "Backend & Database",
            icon: <Database />,
            skills: [
                { name: "Spring Boot", level: 75 },
                { name: "Java", level: 75 },
                { name: "PostgreSQL", level: 80 },
                { name: "MySQL", level: 80 },
                { name: "SQL", level: 85 }
            ]
        },
        {
            category: "DevOps & Tools",
            icon: <Terminal />,
            skills: [
                { name: "Docker", level: 75 },
                { name: "Docker Compose", level: 75 },
                { name: "Git", level: 85 },
                { name: "GitLab", level: 80 },
                { name: "Jira", level: 75 }
            ]
        }
    ];

    const softSkills = [
        {
            name: "Proactif",
            description: "Capacité à anticiper les besoins et prendre des initiatives"
        },
        {
            name: "Force de propositions",
            description: "Contribution active avec des idées innovantes et solutions constructives"
        },
        {
            name: "Adaptabilité",
            description: "Flexibilité face aux changements et nouvelles technologies"
        },
        {
            name: "Esprit d'équipe",
            description: "Collaboration efficace et communication positive avec les membres de l'équipe"
        }
    ];

    return (
        <Box sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: 'grey.50',
            minHeight: '100vh'
        }}>
            {/* Section Compétences Techniques */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 3
                }}>
                    <Brain size={32} />
                    Compétences
                </Typography>

                <Grid container spacing={3}>
                    {technicalSkills.map((category, index) => (
                        <Grid item xs={12} key={index}>
                            <Card sx={{
                                transition: 'box-shadow 0.3s',
                                '&:hover': { boxShadow: 6 }
                            }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        mb: 3,
                                        color: 'primary.main',
                                        fontWeight: 'bold'
                                    }}>
                                        {category.icon}
                                        {category.category}
                                    </Typography>

                                    <Box sx={{ '& > *': { mb: 3 } }}>
                                        {category.skills.map((skill, i) => (
                                            <Box key={i} sx={{ mb: 2 }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    mb: 1
                                                }}>
                                                    <Typography>{skill.name}</Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {skill.level}%
                                                    </Typography>
                                                </Box>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={skill.level}
                                                    sx={{
                                                        height: 8,
                                                        borderRadius: 1,
                                                        bgcolor: 'grey.200',
                                                        '& .MuiLinearProgress-bar': {
                                                            borderRadius: 1,
                                                            backgroundColor: 'primary.main'
                                                        }
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Section Savoir-Être */}
            <Card sx={{
                mt: 4,
                transition: 'box-shadow 0.3s',
                '&:hover': { boxShadow: 6 }
            }}>
                <CardContent>
                    <Typography variant="h6" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 3,
                        color: 'primary.main',
                        fontWeight: 'bold'
                    }}>
                        <Users size={24} />
                        Savoir-Être
                    </Typography>

                    <Grid container spacing={2}>
                        {softSkills.map((skill, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Card variant="outlined" sx={{
                                    height: '100%',
                                    bgcolor: 'background.paper',
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)'
                                    }
                                }}>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                                            {skill.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {skill.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Skills;