import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Chip,
    Box
} from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    overflow: 'hidden',
    transition: 'box-shadow 0.3s',
    display: 'flex',
    flexDirection: 'column',
    height: 400,
    '&:hover': {
        boxShadow: theme.shadows[8],
    },
}));

const ScrollableText = styled(Box)(({ theme }) => ({
    overflowY: 'auto',
    maxHeight: 100,
    paddingRight: theme.spacing(1),
    '&::-webkit-scrollbar': {
        width: 6,
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius,
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: theme.palette.grey[200],
    },
}));

const TechChip = styled(Chip)(({ theme }) => ({
    backgroundColor: theme.palette.primary[50],
    color: theme.palette.primary.main,
    margin: theme.spacing(0.5),
    '& .MuiChip-label': {
        fontSize: '0.875rem',
    },
}));

const ProjectCard = ({ project }) => {
    return (
        <StyledCard>
            <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                {/* Section du titre et bouton GitHub */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 2,
                    height: 60,
                    gap: 2,
                }}>
                    <Typography variant="h5" component="h2" fontWeight="bold" sx={{ flexGrow: 1 }}>
                        {project.title}
                    </Typography>
                    <IconButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                    >
                        <GitHub />
                    </IconButton>
                </Box>

                {/* Section texte défilant */}
                <ScrollableText sx={{ mb: 2 }}>
                    <Typography color="text.secondary">
                        {project.description}
                    </Typography>
                </ScrollableText>

                {/* Liste des technologies */}
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    height: 40,
                }}>
                    {project.technologies.map((tech, index) => (
                        <TechChip
                            key={index}
                            label={tech}
                            size="small"
                        />
                    ))}
                </Box>
            </CardContent>
        </StyledCard>
    );
};

export default ProjectCard;
