import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useGetStatesQuery } from "./redux"
import Topbar from "./sceenes/global/Topbar"
import Sidebar from "./sceenes/global/Sidebar";
import Loader from "./sceenes/global/Loader";
import Dashboard from "./sceenes/dashboard"
import Energy from "./sceenes/energy/Energy"
import Media from "./sceenes/media/Media";

export default function App() {
  const [theme, colorMode] = useMode();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLoading } = useGetStatesQuery('');

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
            <Toolbar />
            {isLoading && <Loader open={isLoading} />}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/energy" element={<Energy isSidebarOpen={open} />} />
              <Route path="/media" element={<Media />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider >
  );
}
