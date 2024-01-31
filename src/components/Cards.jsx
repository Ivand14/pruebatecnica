import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Cards({ image, name, price }) {
    return (
        <Card sx={{ maxWidth: 345, py: 2, margin: '8px', borderRadius: '20px', boxShadow: '0 0 10px grey', mr: 1, mb: 2 }}>
            <CardActionArea sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CardMedia
                    component="img"
                    sx={{ height: "162px", width: '178px', borderRadius: '20px', p: 0 }}
                    image={image}
                    alt={name}
                />
            </CardActionArea>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '29.36px' }}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '10px', lineHeight: '12.1px' }}>
                    {price}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Cards;



