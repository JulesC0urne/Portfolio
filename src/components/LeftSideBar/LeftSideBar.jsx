import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import { Box, CircularProgress, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getItems } from '../../data/ItemsData';

const StyledSidebar = styled(Paper)(({ theme }) => ({
    position: 'fixed',
    left: 0,
    width: '16rem',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
}));

const MenuButton = styled(Button)(({ theme }) => ({
    justifyContent: 'flex-start',
    padding: theme.spacing(1, 2),
    textAlign: 'left',
    width: '100%',
    color: theme.palette.text.secondary,
    '&:hover': {
        backgroundColor: theme.palette.primary.megalight,
        color: theme.palette.primary.main,
    },
    '&.active': {
        backgroundColor: theme.palette.primary.megalight,
        color: theme.palette.primary.main,
    },
}));

const LeftSideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const fetchedItems = getItems();
                setItems(fetchedItems);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch Items:", error);
                setIsLoading(false);
            }
        };
        fetchItems();
    }, []);

    return (
        <StyledSidebar elevation={3}>
            <Box flexGrow={1} p={2} sx={{ overflowY: 'auto' }}>
                {isLoading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height={200}>
                        <CircularProgress />
                    </Box>
                ) : (
                    items.map((item, index) => (
                        <MenuButton
                            key={index}
                            onClick={() => navigate(item.path)}
                            className={location.pathname === item.path ? 'active' : ''}
                            startIcon={item.icon}
                        >
                            {item.title}
                        </MenuButton>
                    ))
                )}
            </Box>

            <Box p={2} borderTop={1} borderColor="divider">
                <MenuButton
                    onClick={() => navigate('/about')}
                    className={location.pathname === '/about' ? 'active' : ''}
                    startIcon={<HelpCircle />}
                >
                    A propos
                </MenuButton>
            </Box>
        </StyledSidebar>
    );
};

export default LeftSideBar;