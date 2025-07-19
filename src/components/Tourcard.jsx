import React from "react"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import car from '../assets/car.jpg';
import Rating from "@mui/material/Rating";

const Tourcard = (props) => {
    return (
        <div>
            <Card sx={{ maxWidth: 600 }}>
                <CardHeader
                    title="A Perfect Holiday spot"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={car}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <Rating
                        name="simple-controlled"
                        value={4}
                        
                    />
                </CardActions>

            </Card>
        </div>
    )
};

export default Tourcard;
