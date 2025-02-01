import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Tabs,
    Tab,
    Box,
    Button,
    IconButton,
    CircularProgress,
    Typography
} from '@mui/material';
import { TabContext } from '@mui/lab';
import { MapPin, Mail, MessageCircle, Calendar } from 'lucide-react';
import { styled } from '@mui/material/styles';
import { TabPanels } from '../Post/Post';
import MessageForm from '../MessageForm/MessageForm';
import { getPosts } from '../../data/PostsData';
import { profile, socialLinks } from '../../data/ProfileData';

// Styled Components
const ProfileContainer = styled('div')(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    overflowY: 'auto',
    backgroundColor: theme.palette.grey[50]
}));

const ProfileCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    boxShadow: theme.shadows[3]
}));

const CoverImage = styled(CardMedia)(({ theme }) => ({
    height: 320,
    objectFit: 'cover'
}));

const SocialIcons = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(1)
}));

const ProfileImage = styled('img')(({ theme }) => ({
    width: 120,
    height: 120,
    borderRadius: '50%',
    border: `4px solid ${theme.palette.background.paper}`,
    position: 'absolute',
    top: -80,
    left: theme.spacing(3),
    boxShadow: theme.shadows[2],
    objectFit: 'cover'
}));

const ProfileUsername = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    top: -8,
    left: 150,
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: '0.875rem'
}));

const InfoItem = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    '& svg': {
        color: theme.palette.text.secondary,
        width: 16,
        height: 16
    }
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    '& .MuiTab-root': {
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '1rem',
    },
    '& .MuiTabs-flexContainer': {
        justifyContent: 'space-around'
    }
}));

const Profile = () => {
    const [selectedTab, setSelectedTab] = useState('interests');
    const [openPopup, setOpenPopup] = useState(false);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = getPosts();
                setPosts(fetchedPosts);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <ProfileContainer
            sx={{
                backgroundColor: 'background.default',
            }}>
            <ProfileCard>
                <CoverImage
                    component="img"
                    image={`${process.env.PUBLIC_URL}/cover.jpg`}
                    alt="Cover"
                />

                <SocialIcons>
                    {socialLinks.map(({ Icon, url, label }, index) => (
                        <IconButton
                            key={index}
                            sx={(theme) => ({
                                backgroundColor: theme.palette.background.paper,
                                '&:hover': {
                                    backgroundColor: theme.palette.grey[100]
                                }
                            })}
                            onClick={() => window.open(url, '_blank')}
                            aria-label={label}
                        >
                            <Icon sx={{ color: 'primary.light' }} />
                        </IconButton>
                    ))}
                </SocialIcons>

                <CardContent sx={{ p: 0 }}>
                    <Box sx={{ position: 'relative' }}>
                        <ProfileImage
                            src={`${process.env.PUBLIC_URL}/profil.png`}
                            alt="Profile"
                        />
                        <ProfileUsername>{profile.pseudo}</ProfileUsername>
                    </Box>

                    <Box sx={{ mt: 3, p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Box>
                                <Typography variant="h4" sx={{ pl: 1, mt: 4 }}>
                                    {profile.firstname} {profile.name}
                                </Typography>
                                <Typography variant="h6" color="primary" sx={{ mt: 0.5, pl: 1 }}>
                                    {profile.position}
                                </Typography>
                            </Box>

                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<MessageCircle size={16} />}
                                onClick={() => setOpenPopup(true)}
                            >
                                Message
                            </Button>
                        </Box>

                        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 1.5, pl: 1 }}>
                            <InfoItem>
                                <Calendar />
                                <Typography>{profile.birthdate}</Typography>
                            </InfoItem>
                            <InfoItem>
                                <MapPin />
                                <Typography>{profile.city}</Typography>
                            </InfoItem>
                            <InfoItem>
                                <Mail />
                                <Typography>{profile.mail}</Typography>
                            </InfoItem>
                        </Box>

                        <Typography sx={{ pl: 1, pt: 3 }} color="text.secondary">
                            {profile.description}
                        </Typography>
                    </Box>
                </CardContent>
            </ProfileCard>

            <TabContext value={selectedTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <StyledTabs
                        value={selectedTab}
                        onChange={(_, newValue) => setSelectedTab(newValue)}
                        aria-label="profile tabs"
                    >
                        <Tab label="Intérêts" value="interests" />
                        <Tab label="Langages" value="langages" />
                        <Tab label="Voyages" value="travels" />
                    </StyledTabs>
                </Box>

                {isLoading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height={200}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <TabPanels posts={posts || []} selectedTab={selectedTab} />
                )}
            </TabContext>

            <MessageForm open={openPopup} onClose={() => setOpenPopup(false)} />
        </ProfileContainer>
    );
};

export default Profile;