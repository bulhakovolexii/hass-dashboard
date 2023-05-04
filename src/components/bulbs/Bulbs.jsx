import { Box, List, ListItem, Switch, Typography } from "@mui/material";
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { useGetStatesQuery, useTurnLightMutation } from "../../redux";
import { useState } from "react";

const Bulb = ({ bulb }) => {
    const colors = bulb.attributes.rgb_color;
    const [checked, setChecked] = useState(bulb.state === 'on');
    const [switchLight] = useTurnLightMutation();


    const handleSetChecked = async () => {
        setChecked(!checked);
        await switchLight({ body: { "entity_id": bulb.entity_id } }).unwrap();
    }
    return (
        <ListItem sx={{ p: 0 }}>
            {bulb.state === 'on' ? <EmojiObjectsIcon sx={{ color: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})` }} /> : <EmojiObjectsOutlinedIcon />}
            <Typography p={1} flexGrow='1' variant="body1" noWrap>{bulb.attributes.friendly_name}</Typography>
            <Switch color="secondary" checked={checked} onChange={handleSetChecked} />
        </ListItem >
    )
}

export default function Bulbs() {
    const { data = [{ entity_id: "light.", attributes: { friendly_name: "" } }] } = useGetStatesQuery();

    const bulbs = data.filter(state => state.entity_id.includes('light.'));

    return (
        <Box width="100%" display="flex" flexDirection="column">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" mb={2}>Lighting</Typography>
            </Box>
            <List sx={{ flexGrow: "1", display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                {bulbs.map((bulb) => (
                    <Bulb key={bulb.entity_id} bulb={bulb} />
                ))}
            </List>
        </Box >
    )
}