import { Box, List, ListItem, Switch, Typography } from "@mui/material";
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { useGetStatesQuery, useTurnLightMutation } from "../../redux";


export default function Bulbs() {
    const { data = [{ entity_id: "light.", attributes: { friendly_name: "" } }] } = useGetStatesQuery();
    const [switchLight] = useTurnLightMutation();

    const bulbStates = data.filter(state => state.entity_id.includes('light.'));

    const Bulb = ({ bulb }) => {
        const handleSwitchLight = async () => {
            if (bulb.state === 'off') {
                await switchLight({ body: { "entity_id": bulb.entity_id } }).unwrap();
            } else {
                await switchLight({ body: { "entity_id": bulb.entity_id } }).unwrap();
            }
        }

        return (
            <ListItem sx={{ p: 0 }}>
                {bulb.state === 'on' ? <EmojiObjectsIcon /> : <EmojiObjectsOutlinedIcon />}
                <Typography p={1} flexGrow='1' variant="body1">{bulb.attributes.friendly_name}</Typography>
                <Switch color="secondary" checked={bulb.state === 'on'} onChange={handleSwitchLight} />
            </ListItem >
        )
    }

    return (
        <Box width="100%" display="flex" flexDirection="column">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5">Lighting</Typography>
            </Box>
            <List sx={{ flexGrow: "1", display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                {bulbStates.map((bulb) => (
                    <Bulb key={bulb.entity_id} bulb={bulb} />
                ))}
            </List>
        </Box >
    )
}