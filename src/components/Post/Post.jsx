import React, { useState } from 'react';
import { Card, CardContent, Avatar, Typography, Box, IconButton } from '@mui/material';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';
import { TabPanel } from '@mui/lab';
import { styled } from '@mui/material/styles';
import ImageCarousel from '../ImageCaroussel/ImageCarousel';
import ImageDialog from '../ImageDialog/ImageDialog';
import { profile } from '../../data/ProfileData';

// Styled components
const PostCard = styled(Card)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none',
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.background.paper, // Assurer que le fond respecte le thème
    '&:hover': {
        backgroundColor: theme.palette.action.hover, // Garde un fond foncé au survol
    },
    marginBottom: theme.spacing(2),
}));


const PostAvatar = styled(Avatar)(({ theme }) => ({
    width: 48,
    height: 48,
    marginRight: theme.spacing(2),
}));

const PostImage = styled('img')(({ theme }) => ({
    width: 'auto',
    height: 300,
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    cursor: 'pointer',
}));

const PostActions = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 425,
    '& .MuiIconButton-root': {
        color: theme.palette.text.secondary,
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
    },
}));

const PostHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
}));

// Base Post Component
const PostBase = ({ children, ...props }) => (
    <PostCard {...props}>
        <CardContent sx={{ p: 2 }}>
            <Box sx={{ display: 'flex' }}>
                <PostAvatar src="./profil.png" alt="Profile" />
                {children}
            </Box>
        </CardContent>
    </PostCard>
);

// Action Buttons Component
const ActionButtons = ({ comments, likes }) => (
    <PostActions>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton size="small"><MessageCircle size={18} /></IconButton>
            <Typography variant="body2">{comments}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton size="small"><Repeat2 size={18} /></IconButton>
            <Typography variant="body2">0</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton size="small"><Heart size={18} /></IconButton>
            <Typography variant="body2">{likes}</Typography>
        </Box>
        <IconButton size="small"><Share size={18} /></IconButton>
    </PostActions>
);

// Interests Component
const Interests = ({ post }) => {
    const [openImageDialog, setOpenImageDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpenImage = (image) => {
        setSelectedImage(image);
        setOpenImageDialog(true);
    };

    return (
        <PostBase>
            <Box sx={{ flex: 1 }}>
                <PostHeader>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {profile.firstname} {profile.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {profile.pseudo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">·</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {post.date}
                    </Typography>
                </PostHeader>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem' }}>
                    {post.title}
                </Typography>

                <Typography variant="body1" sx={{ mb: 2 }}>
                    {post.content}
                </Typography>

                <PostImage
                    src={post.image}
                    alt={post.title}
                    onClick={() => handleOpenImage(post.image)}
                />

                <ActionButtons comments={post.comments} likes={post.likes} />
            </Box>
            <ImageDialog
                open={openImageDialog}
                onClose={() => setOpenImageDialog(false)}
                selectedImage={selectedImage}
            />
        </PostBase>
    );
};

// Langages Component
const Langages = ({ category }) => {
    const [openImageDialog, setOpenImageDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpenImage = (image) => {
        setSelectedImage(image);
        setOpenImageDialog(true);
    };

    return (
        <PostBase>
            <Box sx={{ flex: 1 }}>
                <PostHeader>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {profile.firstname} {profile.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {profile.pseudo}
                    </Typography>
                </PostHeader>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem' }}>
                    {category.title}
                </Typography>

                <Typography variant="body1" sx={{ mb: 2 }}>
                    {category.content}
                </Typography>

                <PostImage
                    src={category.image}
                    alt={category.title}
                    onClick={() => handleOpenImage(category.image)}
                />

                <ActionButtons comments={category.comments} likes={category.likes} />
            </Box>
            <ImageDialog
                open={openImageDialog}
                onClose={() => setOpenImageDialog(false)}
                selectedImage={selectedImage}
            />
        </PostBase>
    );
};

// Travels Component
const Travels = ({ project }) => (
    <PostBase>
        <Box sx={{ flex: 1 }}>
            <PostHeader>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {profile.firstname} {profile.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {profile.pseudo}
                </Typography>
                <Typography variant="body2" color="text.secondary">·</Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.date}
                </Typography>
            </PostHeader>

            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem' }}>
                {project.title}
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
                {project.content}
            </Typography>

            <ImageCarousel images={project.image} />

            <ActionButtons comments={project.comments} likes={project.likes} />
        </Box>
    </PostBase>
);

// Tab Panels Component
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