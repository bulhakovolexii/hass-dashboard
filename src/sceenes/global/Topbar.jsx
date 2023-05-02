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
        [theme.breakpoints.up('sm')]: {
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
                            display: { sm: "flex", xs: "none" },
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
                            display: { sm: "none", xs: "flex" }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" flexGrow={1} noWrap>
                        Home Assistant dashboard
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
                    Title
                </DialogTitle>
                <DialogContentText sx={{ pl: 3, pr: 3 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, architecto sint similique numquam dolorem, temporibus delectus assumenda ea beatae vitae molestias in et provident reiciendis atque suscipit. Cupiditate, suscipit sunt.
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