import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Grid, CircularProgress } from '@mui/material';
import { Users, Brain } from 'lucide-react';
import { getSoftSkills, getTechnicalSkills } from '../../data/SkillsData';
import { useTheme } from '@mui/material/styles';

const Skills = () => {
    const theme = useTheme();
    const [technicalSkills, setTechnicalSkills] = useState([]);
    const [softSkills, setSoftSkills] = useState([]);
    const [isLoadingTech, setIsLoadingTech] = useState(true);
    const [isLoadingSoft, setIsLoadingSoft] = useState(true);

    useEffect(() => {
        const fetchTechnicalSkills = async () => {
            try {
                const fetchedTechnicalSkills = getTechnicalSkills();
                setTechnicalSkills(fetchedTechnicalSkills);
                setIsLoadingTech(false);
            } catch (error) {
                console.error("Failed to fetch TechnicalSkills:", error);
                setIsLoadingTech(false);
            }
        };

        const fetchSoftSkills = async () => {
            try {
                const fetchedSoftSkills = getSoftSkills();
                setSoftSkills(fetchedSoftSkills);
                setIsLoadingSoft(false);
            } catch (error) {
                console.error("Failed to fetch SoftSkills:", error);
                setIsLoadingSoft(false);
            }
        };

        fetchSoftSkills();
        fetchTechnicalSkills();
    }, []);

    return (
        <Box sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: 'background.default', // Using theme for background color
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
                    {isLoadingTech ? (
                        <Box display="flex" justifyContent="center" alignItems="center" height={200}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        technicalSkills.map((category, index) => (
                            <Grid item xs={12} key={index}>
                                <Card sx={{
                                    transition: 'box-shadow 0.3s',
                                    '&:hover': { boxShadow: theme.shadows[6] } // Using theme for shadow
                                }}>
                                    <CardContent>
                                        <Typography variant="h6" sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            mb: 3,
                                            color: theme.palette.primary.main, // Primary color from theme
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
                                                            bgcolor: theme.palette.grey[200], // Background color using theme
                                                            '& .MuiLinearProgress-bar': {
                                                                borderRadius: 1,
                                                                backgroundColor: theme.palette.primary.main // Using primary color for the progress bar
                                                            }
                                                        }}
                                                    />
                                                </Box>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Box>

            {/* Section Savoir-Être */}
            <Card sx={{
                mt: 4,
                transition: 'box-shadow 0.3s',
                '&:hover': { boxShadow: theme.shadows[6] } // Using theme for shadow
            }}>
                <CardContent>
                    <Typography variant="h6" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 3,
                        color: theme.palette.primary.main, // Primary color from theme
                        fontWeight: 'bold'
                    }}>
                        <Users size={24} />
                        Savoir-Être
                    </Typography>

                    <Grid container spacing={2}>
                        {isLoadingSoft ? (
                            <Box display="flex" justifyContent="center" alignItems="center" height={200}>
                                <CircularProgress />
                            </Box>
                        ) : (
                            softSkills.map((skill, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Card variant="outlined" sx={{
                                        height: '100%',
                                        bgcolor: theme.palette.background.paper, // Using background paper color from theme
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
                            ))
                        )}
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Skills;
