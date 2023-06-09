import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Camera from "../../components/camera/Camera";
import Energy from "../../sceenes/energy/Energy";
import Player from "../../components/player/Player";
import Bulbs from "../../components/bulbs/Bulbs";
import HeatPump from "../../components/heat-pump/HeatPump";
import Weather from "../../components/weather/Weather";

export default function Dashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box >
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                <Box
                    sx={{
                        gridColumn: { xs: "span 12", md: "span 6", lg: "span 5", xl: "span 6" },
                        gridRow: { xs: "span 2", lg: 'span 3' },
                        overflow: "hidden"
                    }}
                    bgcolor={colors.primary[400]}
                    borderRadius={1}
                >
                    <Energy isDashboard={true} />
                </Box>
                <Box
                    sx={{
                        display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", p: 2,
                        gridColumn: { xs: "span 12", sm: "span 7", md: "span 6", lg: "span 4", xl: "span 3" },
                        gridRow: { xs: "span 3", md: "span 3", lg: 'span 3' }
                    }}
                    bgcolor={colors.primary[400]}
                    borderRadius={1}
                >
                    <HeatPump />
                </Box>
                <Box
                    sx={{
                        display: "flex", justifyContent: "center", p: 2,
                        gridColumn: { xs: "span 12", sm: "span 5", md: "span 6", lg: "span 3" },
                        gridRow: { xs: "span 3", md: "span 4", lg: 'span 3' }
                    }}
                    bgcolor={colors.primary[400]}
                    borderRadius={1}
                >
                    <Bulbs />
                </Box>
                <Box
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gridColumn: { xs: "span 12", sm: "span 6", md: "span 6", lg: "span 3" },
                        gridRow: { md: "span 1", lg: 'span 1' }
                    }}
                    bgcolor={colors.primary[400]}
                    borderRadius={1}
                >
                    <Player entity_id={"media_player.living_room"} />
                </Box>
                <Box
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gridColumn: { xs: "span 12", sm: "span 6", md: "span 6", lg: "span 3" },
                        gridRow: { md: "span 1", lg: 'span 1' }
                    }}
                    bgcolor={colors.primary[400]}
                    borderRadius={1}
                >
                    <Player entity_id={"media_player.bedroom"} />
                </Box>
                <Box
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gridColumn: { xs: "span 12", sm: "span 6", md: "span 6", lg: "span 3" },
                        gridRow: { md: "span 1", lg: 'span 1' }
                    }}
                    bgcolor={colors.primary[400]}
                    borderRadius={1}
                >
                    <Player entity_id={"media_player.walkman"} />
                </Box>
                <Box
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gridColumn: { xs: "span 12", sm: "span 6", md: "span 6", lg: "span 3" },
                        gridRow: { md: "span 1", lg: 'span 1' }
                    }}
                    bgcolor={colors.primary[400]}
                    borderRadius={1}
                >
                    <Player entity_id={"media_player.kitchen"} />
                </Box>
                <Box
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gridColumn: { xs: "span 12", sm: "span 6", md: "span 6", lg: "span 4" },
                        gridRow: { xs: "span 2", md: "span 2", lg: 'span 2' }
                    }}
                    bgcolor={colors.primary[400]}
                    borderRadius={1}
                >
                    <Weather />
                </Box>
                <Box
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gridColumn: { xs: "span 12", sm: "span 6", md: "span 6", lg: "span 4" },
                        gridRow: 'span 2'
                    }}
                    bgcolor={colors.primary[400]}
                    borderRadius={1}
                >
                    <Camera entity_id="camera.demo_camera" />
                </Box>
                <Box
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gridColumn: { xs: "span 12", sm: "span 6", md: "span 6", lg: "span 4" },
                        gridRow: 'span 2'
                    }}
                    bgcolor={colors.primary[400]}
                    borderRadius={1}
                >
                    <Camera entity_id="camera.demo_camera_png" />
                </Box>
            </Box>
        </Box >
    )
}