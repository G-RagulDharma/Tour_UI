import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MailIcon from '@mui/icons-material/Mail';
import React from "react"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Navbar = (props) => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h5">Tours</Typography>
                <Box sx={{display:"flex",alignItems:"center",gap:"20px"}}>
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon color="action" />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsActiveIcon color="action" />
                    </Badge>
                    <Avatar alt="Image" src="../assets/Me.jpg" />
                </Box>
            </StyledToolbar>
        </AppBar>
    )
};

export default Navbar;
