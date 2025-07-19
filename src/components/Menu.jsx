import React from "react"
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ListItemText from "@mui/material/ListItemText";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ExploreIcon from '@mui/icons-material/Explore';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import TourIcon from '@mui/icons-material/Tour';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

const Menu = (props) => {
    return (
        <Box mt={2} flex={1} sx={{display:{xs:'none',sm:'block'}}}>
            <Box position={"fixed"}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <AirplanemodeActiveIcon />
                            </ListItemIcon>
                            <ListItemText primary="Plan your Trip" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <PendingActionsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Thinks to do" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <ExploreIcon />
                            </ListItemIcon>
                            <ListItemText primary="Explore" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <FactCheckIcon />
                            </ListItemIcon>
                            <ListItemText primary="Facts" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <TourIcon />
                            </ListItemIcon>
                            <ListItemText primary="Places" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <AirplaneTicketIcon />
                            </ListItemIcon>
                            <ListItemText primary="Tickets" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
};

export default Menu;
