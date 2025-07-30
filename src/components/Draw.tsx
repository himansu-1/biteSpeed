import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Card, CardContent, TextField, useMediaQuery } from '@mui/material';

import { Link, Outlet, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'showDrawer' })<{
    open?: boolean;
    showDrawer?: boolean;
}>(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    variants: [
        {
            props: ({ open }) => open,
            style: {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            },
        },
    ],
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Draw() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(() => true);
    const [nodeText, setNodeText] = React.useState('');
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isTabletOrBelow = useMediaQuery('(max-width: 960px)');

    const handleAddNode = () => {
        if (nodeText.trim()) {
            // Dispatch event or call function to add node (via context or global store)
            const newNodeEvent = new CustomEvent("add-text-node", { detail: nodeText });
            window.dispatchEvent(newNodeEvent);
            setNodeText('');
        }
    };

    const handleReset = () => {
        setNodeText('');
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        if (isTabletOrBelow) {
            setOpen(false); // Close drawer on mobile
        }
    }, [isTabletOrBelow]);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={isHomePage && open}>
                <Toolbar>
                    {
                        isHomePage && !open && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )
                    }
                    <List sx={{ display: 'flex', gap: 2, ml: 4 }}>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/">
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/layouts">
                                <ListItemText primary="Layout" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
            { // This is Side Draw component
                isHomePage &&
                (<Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>

                        {/* Card Form section */}
                        <Card>
                            <CardContent>
                                <TextField
                                    label="Enter your text here"
                                    variant="outlined" // or "filled", "standard"
                                    fullWidth
                                    multiline // if you want a multi-line input
                                    rows={4} // specify visible rows for multiline
                                    value={nodeText}
                                    onChange={(e) => setNodeText(e.target.value)}
                                />
                                <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
                                    <Button variant='contained' onClick={handleAddNode}>Add</Button>
                                    <Button variant='outlined' onClick={handleReset}>Reset</Button>
                                </Box>
                            </CardContent>
                        </Card>

                    </List>
                    <Divider />
                </Drawer>)
            }
            <Main open={open} showDrawer={isHomePage}>
                {
                    isHomePage && (
                        <DrawerHeader />
                    )
                }
                <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
                    {/* Home Component */}
                    <Outlet />
                </Box>
            </Main>
        </Box>
    );
}
