import { ColorModeContext, useMode } from "./theme";
import { Container, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Topbar from "./sceenes/global/Topbar"
import Sidebar from "./sceenes/global/Sidebar";
import Dashboard from "./sceenes/dashboard"
import Energy from "./sceenes/energy/Energy"
import Media from "./sceenes/media/Media";

export default function App() {
  const [theme, colorMode] = useMode();
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar
            open={open}
            mobileOpen={mobileOpen}
            handleDrawerClose={handleDrawerClose}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Topbar
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
          <div className="content">
            <Container maxWidth="xl" sx={{ pt: "16px", pb: "16px" }} >
              <Toolbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/energy" element={<Energy isSidebarOpen={open} />} />
                <Route path="/media" element={<Media />} />
              </Routes>
            </Container>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider >
  );
}
