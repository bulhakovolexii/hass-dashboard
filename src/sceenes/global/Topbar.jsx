import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Button, Dialog, DialogActions, DialogContentText, DialogTitle, IconButton, Toolbar, Typography, styled, useTheme, } from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function Topbar({ open, handleDrawerOpen, handleDrawerToggle }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [infoOpen, setInfoOpen] = useState(false);


    const toggleInfo = () => {
        setInfoOpen(!infoOpen);
    }

    return (
        <>
            <AppBar position="fixed"
                open={open}
                color="transparent"
                sx={{ bgcolor: colors.primary[400] }} >
                <Toolbar>
                    <IconButton
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            display: { md: "flex", xs: "none" },
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        onClick={handleDrawerToggle}
                        edge="start"
                        sx={{
                            ...(open && { display: "none" }),
                            display: { md: "none", sm: "flex" }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" flexGrow={1} noWrap>
                        Smart Home Dashboard
                    </Typography>
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                    </IconButton>
                    <IconButton onClick={toggleInfo}>
                        <InfoOutlinedIcon />
                    </IconButton>
                </Toolbar>
            </ AppBar >
            <Dialog
                open={infoOpen}
                onClose={toggleInfo}
                sx={{ "& .MuiPaper-root": { backgroundColor: theme.palette.mode === 'dark' && colors.primary[600] } }}
            >
                <DialogTitle>
                    Hello World!
                </DialogTitle>
                <DialogContentText sx={{ pl: 3, pr: 3 }}>
                    My name is Olexii Bulhakov. This project is my graduation work at the frontend course at the Prog.academy school.
                    In this work, for the first time, I am doing a real task in React, using the libraries Mui, Nivo, Redux and RTK Query. As
                    a backend, I used a home assistant server deployed on AWS. All functional elements on the page depend on the state of the
                    entities that I get from the home assistant demo integration.
                </DialogContentText>
                <DialogActions>
                    <Button
                        onClick={toggleInfo}
                        sx={{ color: colors.blueAccent[600] }}
                    >
                        Back
                    </Button>
                    <Button
                        onClick={toggleInfo}
                        autoFocus
                        href="https://github.com/bulhakovolexii"
                        target="_blank"
                        sx={{ color: colors.blueAccent[600] }}
                    >
                        To my GitHub
                    </Button>
                </DialogActions>
            </Dialog >
        </>
    )
}