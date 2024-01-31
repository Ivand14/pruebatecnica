import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ServiceCards({ image, name }) {
    return (
        <Card sx={{ maxWidth: 345, py: 2, margin: '8px', borderRadius: '20px', boxShadow: '0 0 10px grey', mr: 1, mb: 2 }}>
            <CardActionArea sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CardMedia
                    component="img"
                    sx={{ height: "134px", width: '134px', borderRadius: '100%', p: '16px' }}
                    image={image}
                    alt={name}
                />
            </CardActionArea>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '28.9px' }}>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ServiceCards;