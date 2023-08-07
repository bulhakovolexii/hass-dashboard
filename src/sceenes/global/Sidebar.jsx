import { tokens } from "../../theme";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useChangeStateMutation, useGetStateQuery } from "../../redux";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Toolbar,
  styled,
  useTheme,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ElectricMeterOutlinedIcon from "@mui/icons-material/ElectricMeterOutlined";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: "0px",
  [theme.breakpoints.up("md")]: { width: drawerWidth },
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "0px",
  [theme.breakpoints.up("md")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, background }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiPaper-root": { background: background },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar({
  open,
  mobileOpen,
  handleDrawerClose,
  handleDrawerToggle,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState(document.location.pathname);
  const userEntity = "person.olexii_bulhakov";
  const { data: user = { entity_id: userEntity } } =
    useGetStateQuery(userEntity);
  const [toggleIsHome] = useChangeStateMutation();

  const handleIsHome = async () => {
    if (user.state === "not_home") {
      await toggleIsHome({
        body: { state: "home" },
        entity_id: userEntity,
      }).unwrap();
    } else {
      await toggleIsHome({
        body: { state: "not_home" },
        entity_id: userEntity,
      }).unwrap();
    }
  };

  const DrawerItem = ({ title, to, icon, selected, setSelected }) => {
    return (
      <ListItem disablePadding>
        <ListItemButton
          selected={selected === to}
          disabled={selected === to}
          component={Link}
          to={to}
          onClick={() => {
            setSelected(to);
            if (mobileOpen) handleDrawerToggle();
          }}
          sx={{
            "&.Mui-selected": {
              backgroundColor: colors.blueAccent[600],
            },
            "&.Mui-disabled": {
              opacity: 1,
            },
          }}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    );
  };

  const DrawerList = () => {
    return (
      <>
        <List sx={{ flexGrow: "1" }}>
          <DrawerItem
            title="Dashboard"
            to="/hass-dashboard/"
            icon={<DashboardOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <DrawerItem
            title="Energy"
            to="/hass-dashboard/energy"
            icon={<ElectricMeterOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </List>
        <ListItem sx={{ pl: 2 }}>
          <Tooltip title={user.state === "home" ? "leave home" : "come home"}>
            <ListItemAvatar>
              <IconButton edge="start" onClick={handleIsHome}>
                <Badge
                  invisible={user.state !== "home"}
                  color="secondary"
                  variant="dot"
                  overlap="circular"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar
                    alt="user-profile"
                    src="../hass-dashboard/assets/olexii.jpg"
                  />
                </Badge>
              </IconButton>
            </ListItemAvatar>
          </Tooltip>
          <ListItemText
            sx={{
              "& .MuiListItemText-primary": { textTransform: "capitalize" },
            }}
            primary={user.entity_id.slice(7).split("_").join(" ")}
            secondary={user.state === "home" ? "at home" : "away"}
          />
        </ListItem>
      </>
    );
  };

  return (
    <>
      <Drawer variant="permanent" open={open} background={colors.primary[900]}>
        <Toolbar sx={{ justifyContent: "end" }}>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              ...(!open && { display: "none" }),
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <DrawerList />
      </Drawer>
      <MuiDrawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { sm: "flex", md: "none" },
          zIndex: theme.zIndex.drawer + 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            flexGrow: 1,
            width: drawerWidth,
            bgcolor: colors.primary[400],
          }}
        >
          <Toolbar />
          <Divider />
          <DrawerList />
        </Box>
      </MuiDrawer>
    </>
  );
}
