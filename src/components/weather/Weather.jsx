import Icon from "@mdi/react";
import {
  mdiWeatherNight,
  mdiWeatherCloudy,
  mdiWeatherFog,
  mdiWeatherHail,
  mdiWeatherLightning,
  mdiWeatherLightningRainy,
  mdiWeatherPartlyCloudy,
  mdiWeatherPouring,
  mdiWeatherRainy,
  mdiWeatherSnowy,
  mdiWeatherSnowyRainy,
  mdiWeatherSunny,
  mdiWeatherWindy,
  mdiWeatherWindyVariant,
  mdiWeatherCloudyAlert,
} from "@mdi/js";
import {
  Box,
  Card,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useGetStateQuery } from "../../redux";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import AirIcon from "@mui/icons-material/Air";
import ScaleIcon from "@mui/icons-material/Scale";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

export default function Weather() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    data = {
      state: "",
      attributes: {
        temperature: "",
        temperature_unit: "",
      },
    },
  } = useGetStateQuery("weather.forecast_golovna");
  const weather = {
    state: "",
    icon: "",
  };

  const setData = () => {
    switch (data.state) {
      case "clear-night":
        weather.state = "Clear night";
        weather.icon = mdiWeatherNight;
        break;
      case "cloudy":
        weather.state = "Cloudy";
        weather.icon = mdiWeatherCloudy;
        break;
      case "fog":
        weather.state = "Fog";
        weather.icon = mdiWeatherFog;
        break;
      case "hail":
        weather.state = "Hail";
        weather.icon = mdiWeatherHail;
        break;
      case "lightning":
        weather.state = "Lightning";
        weather.icon = mdiWeatherLightning;
        break;
      case "lightning-rainy":
        weather.state = "Lightning rainy";
        weather.icon = mdiWeatherLightningRainy;
        break;
      case "partlycloudy":
        weather.state = "Partly cloudy";
        weather.icon = mdiWeatherPartlyCloudy;
        break;
      case "pouring":
        weather.state = "Pouring";
        weather.icon = mdiWeatherPouring;
        break;
      case "rainy":
        weather.state = "Rainy";
        weather.icon = mdiWeatherRainy;
        break;
      case "snowy":
        weather.state = "Snowy";
        weather.icon = mdiWeatherSnowy;
        break;
      case "snowy-rainy":
        weather.state = "Snowy rainy";
        weather.icon = mdiWeatherSnowyRainy;
        break;
      case "sunny":
        weather.state = "Sunny";
        weather.icon = mdiWeatherSunny;
        break;
      case "windy":
        weather.state = "Windy";
        weather.icon = mdiWeatherWindy;
        break;
      case "windy-variant":
        weather.state = "Windy variant";
        weather.icon = mdiWeatherWindyVariant;
        break;
      default:
        weather.state = "Exceptional";
        weather.icon = mdiWeatherCloudyAlert;
    }
  };

  setData();

  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        bgcolor: "transparent",
        backgroundImage: "none",
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box mr={2}>
          <Icon path={weather.icon} size={3} color={colors.blueAccent[100]} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5">{weather.state}</Typography>
          <Box display="flex" pr={2}>
            <DeviceThermostatIcon />
            <Typography variant="body1">
              {data.attributes.temperature +
                " " +
                data.attributes.temperature_unit}
            </Typography>
          </Box>
        </Box>
      </Box>
      <List>
        <ListItem sx={{ pt: 0, pb: 0 }}>
          <ListItemIcon>
            <ScaleIcon />
          </ListItemIcon>
          <Typography variant="body1" width="60%" pr={2}>
            Atmospheric pressure
          </Typography>
          <ListItemText
            primary={data.attributes.pressure}
            secondary={data.attributes.pressure_unit}
          />
        </ListItem>
        <ListItem sx={{ pt: 0, pb: 0 }}>
          <ListItemIcon>
            <WaterDropIcon />
          </ListItemIcon>
          <Typography variant="body1" width="60%" pr={2}>
            Humidity
          </Typography>
          <ListItemText primary={data.attributes.humidity} secondary="%" />
        </ListItem>
        <ListItem sx={{ pt: 0, pb: 0 }}>
          <ListItemIcon>
            <AirIcon />
          </ListItemIcon>
          <Typography variant="body1" width="60%" pr={2}>
            Wind speed
          </Typography>
          <ListItemText
            primary={data.attributes.wind_speed}
            secondary={data.attributes.wind_speed_unit}
          />
        </ListItem>
      </List>
    </Card>
  );
}
