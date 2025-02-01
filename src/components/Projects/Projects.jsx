import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, CircularProgress } from '@mui/material';
import ProjectCard from '../ProjectCard/ProjectCard';
import { getProjects } from '../../data/ProjectsData';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const fetchedProjects = getProjects();
                setProjects(fetchedProjects);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <Box sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: 'background.default', // Use theme's background color
            overflow: 'auto'
        }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 4 }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        fontWeight="bold"
                        color="text.primary" // Use theme's primary text color
                    >
                        Mes Projets
                    </Typography>
                    <Typography color="text.secondary">
                        Découvrez une sélection de mes projets les plus récents et significatifs
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {isLoading ? (
                        <Box display="flex" justifyContent="center" alignItems="center" height={200}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        projects.map(project => (
                            <Grid item xs={12} md={6} lg={4} key={project.id}>
                                <ProjectCard project={project} />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
