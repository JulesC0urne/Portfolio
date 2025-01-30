import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    Divider,
    Box,
    Link,
    Paper,
    Container
} from '@mui/material';
import { Github } from 'lucide-react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const About = () => {
    const technologies = [
        {
            category: "Frontend",
            icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
            items: [
                { name: "React", version: "19.0.0" },
                { name: "Material UI", version: "6.4.0" },
                { name: "Tailwind CSS", version: "3.4.17" }
            ]
        },
        {
            category: "Outils",
            icon: <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
            items: [
                { name: "EmailJS", version: "4.4.1" },
                { name: "Git", version: "latest" }
            ]
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{
                minHeight: '100vh',
                '& > *': { mb: 4 }
            }}>
                <Card elevation={2} sx={{ borderRadius: 2 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h3" component="h1"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                mb: 2
                            }}>
                            À propos
                        </Typography>
                        <Typography variant="subtitle1" sx={{
                            color: 'text.secondary',
                            maxWidth: '800px',
                            fontSize: '1.1rem',
                            lineHeight: 1.6
                        }}>
                            Portfolio v1.0
                        </Typography>
                    </CardContent>
                </Card>

                {/* Présentation du projet */}
                <Card elevation={3} sx={{ borderRadius: 3, mb: 4 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" gutterBottom sx={{
                            fontWeight: 600,
                            color: 'primary.main',
                            mb: 3
                        }}>
                            Le Projet
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            color: 'text.primary'
                        }}>
                            Ce portfolio est actuellement une vitrine de mon parcours professionnel et de mes réalisations en tant que développeur Full-Stack. Il a été conçu pour évoluer potentiellement vers une plateforme sociale dédiée aux développeurs, permettant le partage d'expériences et la création d'une communauté tech engagée.
                        </Typography>
                    </CardContent>
                </Card>

                {/* Stack technique */}
                <Card elevation={3} sx={{ borderRadius: 3, mb: 4 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" gutterBottom sx={{
                            fontWeight: 600,
                            color: 'primary.main',
                            mb: 4
                        }}>
                            Stack Technique
                        </Typography>
                        <Grid container spacing={4}>
                            {technologies.map((tech, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <Paper elevation={2} sx={{
                                        p: 3,
                                        borderRadius: 2,
                                        height: '100%',
                                        transition: 'transform 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-4px)'
                                        }
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            {tech.icon}
                                            <Typography variant="h6" sx={{ ml: 2, fontWeight: 600 }}>
                                                {tech.category}
                                            </Typography>
                                        </Box>
                                        <List>
                                            {tech.items.map((item, idx) => (
                                                <ListItem key={idx} sx={{
                                                    py: 1,
                                                    borderRadius: 1,
                                                    '&:hover': { bgcolor: 'action.hover' }
                                                }}>
                                                    <ListItemText
                                                        primary={item.name}
                                                        secondary={`v${item.version}`}
                                                        primaryTypographyProps={{
                                                            fontWeight: 500
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>

                {/* Fonctionnalités futures */}
                <Card elevation={3} sx={{ borderRadius: 3 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                            <RocketLaunchIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                            <Typography variant="h4" sx={{ fontWeight: 600, color: 'primary.main' }}>
                                Évolutions Futures
                            </Typography>
                        </Box>
                        <Grid container spacing={2}>
                            {[
                                "Intégration de services backend",
                                "Système de messaging entre développeurs",
                                "Commenter, liker, partager des posts",
                                "Partage de projets et de code",
                            ].map((item, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <Paper elevation={1} sx={{
                                        p: 2,
                                        borderRadius: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        transition: 'transform 0.2s',
                                        '&:hover': {
                                            transform: 'translateX(8px)',
                                            bgcolor: 'action.hover'
                                        }
                                    }}>
                                        <FiberManualRecordIcon color="primary" sx={{ fontSize: 12, mr: 2 }} />
                                        <Typography>{item}</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>

                {/* Footer */}
                <Divider sx={{ my: 4 }} />
                <Link
                    href="https://github.com/JulesC0urne/portfolio.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: 'text.secondary',
                        textDecoration: 'none',
                        p: 2,
                        borderRadius: 2,
                        transition: 'all 0.2s',
                        '&:hover': {
                            color: 'primary.main',
                            bgcolor: 'action.hover'
                        }
                    }}
                >
                    <Github style={{ marginRight: 12, width: 24, height: 24 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        Voir le code source sur GitHub
                    </Typography>
                </Link>
            </Box>
        </Container>
    );
};

export default About;