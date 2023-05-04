import CircularSlider from '@fseehawer/react-circular-slider';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';

import { useState } from 'react';
import { tokens } from '../../theme';
import { useGetStateQuery, useSetHeatTepmMutation, useTurnHeatPumpMutation } from '../../redux/statesApi';
import { useEffect } from 'react';



export default function HeatPump() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isDragging, setIsDragging] = useState();
    const [value, setValue] = useState('');
    const [setTemperature] = useSetHeatTepmMutation()
    const [setMode] = useTurnHeatPumpMutation();

    useEffect(() => {
        if (!isDragging && value !== '') {
            setTemperature({
                body: {
                    entity_id: "climate.heatpump", temperature: value
                }
            });
        }
    }, [isDragging, setTemperature, value]);
    const { data = {
        state: "",
        attributes: {
            temperature: ""
        }
    } } = useGetStateQuery("climate.heatpump");

    return (
        <>
            <CircularSlider
                width={250}
                min={7}
                max={35}
                dataIndex={data.attributes.temperature - 7}
                direction={1}
                knobPosition="bottom"
                appendToValue="°C"
                label="Heating"
                valueFontSize="3rem"
                trackColor={colors.blueAccent[900]}
                progressColorFrom={isDragging ? "#F0A367" : colors.greenAccent[500]}
                progressColorTo={isDragging ? "#F65749" : colors.greenAccent[700]}
                labelColor={isDragging ? "#F0A367" : colors.greenAccent[500]}
                knobColor={isDragging ? "#F0A367" : colors.greenAccent[500]}
                isDragging={(value) => setIsDragging(value)}
                onChange={value => setValue(value)}
            />
            <Typography variant='h5' mt={2} align='center'>Heat Pump</Typography>
            <Box display="flex">
                <IconButton
                    color={data.state === "heat" ? "secondary" : ""}
                    onClick={() => setMode({ body: { entity_id: "climate.heatpump" }, action: 'turn_on' })}
                >
                    <LocalFireDepartmentOutlinedIcon fontSize='large' />
                </IconButton>
                <IconButton
                    onClick={() => setMode({ body: { entity_id: "climate.heatpump" }, action: 'turn_off' })}
                >
                    < PowerSettingsNewOutlinedIcon fontSize='large' />
                </IconButton>
            </Box>
        </>
    )
}
