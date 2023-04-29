import { Box } from "@mui/material";
import EnergyChart from "../../components/energy-chart/EnergyChart";

export default function Energy({ isSidebarOpen }) {
    return (
        <Box sx={{
            overflow: "hidden",
            p: { xs: 0, md: 4 },
            aspectRatio: "3 / 2",
            maxWidth: { sm: isSidebarOpen ? "calc( 100vw - 240px )" : "calc(100vw - 65px)" },
            maxHeight: "calc(100vh - 85px)",
            width: "100%"
        }}>
            <EnergyChart />
        </Box>
    )
}