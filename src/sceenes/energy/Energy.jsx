import { Box, Card, Typography } from "@mui/material";
import EnergyChart from "../../components/energy-chart/EnergyChart";

export default function Energy({ isSidebarOpen, isDashboard }) {
    return (
        <Card sx={{ width: "100%", height: "100%", bgcolor: "transparent", backgroundImage: "none" }}>
            <Box sx={isDashboard ? {
                height: "85%"
            } :
                {
                    overflow: "hidden",
                    aspectRatio: "3 / 2",
                    maxWidth: { sm: isSidebarOpen ? "calc( 100vw - 240px )" : "calc(100vw - 65px)" },
                    maxHeight: "calc(100vh - 85px)",
                    width: "100%"
                }}>
                {isDashboard ? <Typography variant="h6" align="center" pt={1}>Energy Consumption</Typography> : null}
                <EnergyChart isDashboard={isDashboard} />
            </Box>
        </Card>
    )
}