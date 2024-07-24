import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import {Box, Drawer, List, ListItem, ListItemText, CssBaseline} from '@mui/material';
import Surveys from './components/Surveys';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import './index.css'

const drawerWidth = 240;

function App() {
    return (
        <Router>
            <CssBaseline/>
            <Box className="container" sx={{display: 'flex', height: '100vh'}}>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            margin: '70px 0 0 300px',
                            border: 'none !important'
                        },
                    }}
                >
                    <List sx={{fontSize: '0.9rem !important'}}>
                        <nav-header>SURVEYS</nav-header>
                        <CustomListItem to="/page2" primary="Open Surveys"/>
                        <CustomListItem to="/surveys" primary="Your Surveys"/>
                        <CustomListItem to="/page3" primary="Responded Surveys"/>
                        <nav-header>MY ACCOUNT</nav-header>
                        <CustomListItem to="/page4" primary="Logout"/>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        display: 'flex',
                        margin: '50px 200px 0 300px'
                    }}
                >
                    <Routes>
                        <Route path="/page2" element={<Page2/>}/>
                        <Route path="/surveys" element={<Surveys/>}/>
                        <Route path="/page3" element={<Page3/>}/>
                        <Route path="/" element={<Surveys/>}/>
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
}

function CustomListItem({to, primary}) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <ListItem
            button
            component={Link}
            to={to}
            sx={{
                paddingLeft: '30px',
                borderRadius: '5px',
                paddingTop: '4px',
                paddingBottom: '4px',
                backgroundColor: isActive ? '#1997c6' : 'transparent',
                color: isActive ? 'white' : '#1997c6',
                '&:hover': {
                    color: isActive ? '#white' : '#0c485e',
                    backgroundColor: isActive ? '#1997c6' : 'transparent',
                },
            }}
        >
            <ListItemText primary={primary}/>
        </ListItem>
    );
}

export default App;
