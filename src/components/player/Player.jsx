import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import { useControlMusicMutation, useGetStateQuery } from "../../redux";
import { useTheme } from "@emotion/react";
import Marquee from "react-fast-marquee";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from "@mui/icons-material/Pause";

export default function Player({ entity_id }) {
  const theme = useTheme();
  const {
    data: player = {
      attributes: {
        entity_picture: "",
        media_content_type: "",
      },
    },
    isLoading,
  } = useGetStateQuery(entity_id, { pollingInterval: 3000 });
  const [ControlMusic] = useControlMusicMutation();
  const imgPath = `${process.env.REACT_APP_HASS_URL}${player.attributes.entity_picture}`;

  const handlePlayPause = () => {
    ControlMusic({
      body: { entity_id: entity_id },
      action: "media_play_pause",
    });
  };

  const handlePrevTrack = () => {
    ControlMusic({
      body: { entity_id: entity_id },
      action: "media_previous_track",
    });
  };

  const handleNextTrack = () => {
    ControlMusic({
      body: { entity_id: entity_id },
      action: "media_next_track",
    });
  };

  return (
    <Card
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        bgcolor: "transparent",
        backgroundImage: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
        }}
      >
        <CardContent
          sx={{
            flex: "1 0 auto",
            pb: 0,
          }}
        >
          <Typography component="div" variant="body2">
            {player.attributes.friendly_name}
          </Typography>
          <Typography component="div" variant="body2" noWrap>
            {player.state === "playing" ? (
              <Marquee
                speed={20}
                gradient={true}
                gradientColor={
                  theme.palette.mode === "dark" ? [31, 42, 64] : [242, 240, 240]
                }
                gradientWidth={10}
              >
                {player.attributes.media_title}
              </Marquee>
            ) : (
              player.attributes.media_title
            )}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            noWrap
          >
            {player.attributes.media_content_type === "music"
              ? player.attributes.media_artist
              : player.attributes.app_name}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 1,
            pb: 1,
          }}
        >
          {player.attributes.media_content_type === "music" ? (
            <IconButton onClick={handlePrevTrack}>
              <SkipPreviousIcon />
            </IconButton>
          ) : null}
          <IconButton onClick={handlePlayPause}>
            {player.state === "playing" ? (
              <PauseIcon sx={{ height: 38, width: 38 }} />
            ) : (
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            )}
          </IconButton>
          {player.attributes.media_content_type === "music" ? (
            <IconButton onClick={handleNextTrack}>
              <SkipNextIcon />
            </IconButton>
          ) : null}
        </Box>
      </Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <CardMedia sx={{ width: "40%" }} component="img" image={imgPath} />
      )}
    </Card>
  );
}
