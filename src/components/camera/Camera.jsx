import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useGetStateQuery } from "../../redux";

export default function Camera({ entity_id }) {
  const {
    data: img = {
      attributes: { entity_picture: "" },
    },
    isLoading,
  } = useGetStateQuery(entity_id, { pollingInterval: 10000 });
  const imgPath = `https://hassapi.bulhakov.dev${img.attributes.entity_picture}`;

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        bgcolor: "transparent",
        backgroundImage: "none",
        position: "relative",
      }}
    >
      <CardMedia sx={{ height: "100%" }} image={imgPath} />
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <Typography variant="body1" sx={{ color: "white" }}>
          {img.attributes.friendly_name}
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          {img.state}
        </Typography>
      </CardContent>
    </Card>
  );
}
