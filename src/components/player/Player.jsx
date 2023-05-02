import { Box, Card, CardContent, CardMedia, CircularProgress, IconButton, Typography } from "@mui/material";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from "@emotion/react";
import { useGetStateQuery } from "../../redux";

export default function Player({ entity_id }) {
    const theme = useTheme();
    const { data: player = { attributes: { entity_picture: "" } }, isLoading } = useGetStateQuery(entity_id, { pollingInterval: 10000 })
    const imgPath = `http://ec2-13-50-251-209.eu-north-1.compute.amazonaws.com:8123${player.attributes.entity_picture}`;

    return (
        <Card sx={{ display: 'flex', height: "100%", width: "100%", bgcolor: "transparent", backgroundImage: "none" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: "60%" }}>
                <CardContent sx={{ flex: '1 0 auto', pb: 0 }}>
                    <Typography component="div" variant="body2">{player.attributes.friendly_name}</Typography>
                    <Typography component="div" variant="body2" noWrap>
                        {player.attributes.media_title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        {player.attributes.media_artist !== undefined ? player.attributes.media_artist : player.attributes.app_name}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box>
            </Box>
            {isLoading ? <CircularProgress /> :
                <CardMedia
                    sx={{ width: "40%" }}
                    component="img"
                    image={imgPath}
                    alt="Live from space album cover"
                />}
        </Card>
    )
}