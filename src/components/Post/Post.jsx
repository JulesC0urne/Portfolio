import React, { useState } from 'react';
import { Card, CardContent, Avatar, Typography, Box, IconButton } from '@mui/material';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';
import { TabPanel } from '@mui/lab';
import { styled } from '@mui/material/styles';
import ImageCarousel from '../ImageCaroussel/ImageCarousel';
import ImageDialog from '../ImageDialog/ImageDialog';

// Styles communs
const CommonCard = styled(Card)(({ theme }) => ({
    border: '1px solid #e1e8ed',
    boxShadow: 'none',
    borderRadius: '16px',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
    },
    marginBottom: theme.spacing(2),
}));

const CardAvatar = styled(Avatar)(({ theme }) => ({
    width: 48,
    height: 48,
    marginRight: theme.spacing(2),
}));

// Les posts "Intérêts"
const Interests = ({ post }) => {
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

    return (
        <CommonCard>
            <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex' }}>
                    <CardAvatar src="./profil.png" alt="Profile" />
                    <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                Jules Courné
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                @julescourne
                            </Typography>
                            <Typography variant="body2" color="text.secondary">·</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post.date}
                            </Typography>
                        </Box>

                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem' }}>
                            {post.title}
                        </Typography>

                        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                            {post.content}
                        </Typography>
                        <img
                            src={post.image}
                            alt={post.title}
                            onClick={() => handleOpenImage(post.image)}
                            style={{
                                width: 'auto',
                                height: '300px',
                                borderRadius: '8px',
                                marginTop: '8px',
                                marginBottom: '12px',
                                cursor: 'pointer',
                            }}
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '425px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton size="small"><MessageCircle size={18} /></IconButton>
                                <Typography variant="body2">{post.comments}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton size="small"><Repeat2 size={18} /></IconButton>
                                <Typography variant="body2">0</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton size="small"><Heart size={18} /></IconButton>
                                <Typography variant="body2">{post.likes}</Typography>
                            </Box>
                            <IconButton size="small"><Share size={18} /></IconButton>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
            <ImageDialog open={openImageDialog} onClose={handleCloseImage} selectedImage={selectedImage} />
        </CommonCard>
    );
};

// Les posts "Langages"
const Langages = ({ category }) => {

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

    return (
        <CommonCard>
            <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex' }}>
                    <CardAvatar src="/api/placeholder/48/48" alt="Profile" />
                    <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                Jules Courné
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                @julescourne
                            </Typography>
                        </Box>

                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem' }}>
                            {category.title}
                        </Typography>

                        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                            {category.content}
                        </Typography>
                        <img
                            src={category.image}
                            alt={category.title}
                            onClick={() => handleOpenImage(category.image)}
                            style={{
                                width: 'auto',
                                height: '300px',
                                borderRadius: '8px',
                                marginTop: '8px',
                                marginBottom: '12px',
                                cursor: 'pointer',
                            }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '425px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton size="small"><MessageCircle size={18} /></IconButton>
                                <Typography variant="body2">{category.comments}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton size="small"><Repeat2 size={18} /></IconButton>
                                <Typography variant="body2">0</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton size="small"><Heart size={18} /></IconButton>
                                <Typography variant="body2">{category.likes}</Typography>
                            </Box>
                            <IconButton size="small"><Share size={18} /></IconButton>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
            <ImageDialog open={openImageDialog} onClose={handleCloseImage} selectedImage={selectedImage} />
        </CommonCard>
    );
};

// Les posts "Voyages"
const Travels = ({ project }) => {

    return (

        <Card sx={{
            border: '1px solid #e1e8ed',
            boxShadow: 'none',
            borderRadius: '16px',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
            },
            marginBottom: 2,
        }}>
            <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex' }}>
                    <Avatar
                        src="./profil.png"
                        alt="Profile"
                        sx={{ width: 48, height: 48, marginRight: 2 }}
                    />
                    <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                Jules Courné
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                @julescourne
                            </Typography>
                            <Typography variant="body2" color="text.secondary">·</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {project.date}
                            </Typography>
                        </Box>

                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem' }}>
                            {project.title}
                        </Typography>

                        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                            {project.content}
                        </Typography>

                        <ImageCarousel images={project.image} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '425px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton size="small"><MessageCircle size={18} /></IconButton>
                                <Typography variant="body2">{project.comments}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton size="small"><Repeat2 size={18} /></IconButton>
                                <Typography variant="body2">0</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton size="small"><Heart size={18} /></IconButton>
                                <Typography variant="body2">{project.likes}</Typography>
                            </Box>
                            <IconButton size="small"><Share size={18} /></IconButton>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
            <ImageDialog />
        </Card>
    )
};

// Les différents posts via une tabulation
export const TabPanels = ({ posts, selectedTab }) => (
    <Box sx={{ mt: 2 }}>
        <TabPanel value="interests" sx={{ p: 0 }}>
            {posts.interests.map(post => (
                <Interests key={post.id} post={post} />
            ))}
        </TabPanel>

        <TabPanel value="langages" sx={{ p: 0 }}>
            {posts.langages.map(category => (
                <Langages key={category.id} category={category} />
            ))}
        </TabPanel>

        <TabPanel value="travels" sx={{ p: 0 }}>
            {posts.travels.map(project => (
                <Travels key={project.id} project={project} />
            ))}
        </TabPanel>
    </Box>
);
