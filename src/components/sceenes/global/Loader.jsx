import { Backdrop, CircularProgress } from "@mui/material";

export default function Loader({ open }) {
    return (
        <Backdrop
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}