import { Box, Typography } from '@mui/material';

import { Height } from '@mui/icons-material';
import React from 'react';

function Events() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mt: 5 }}>
            <Typography variant="h2" sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '25px', lineHeight: '36.13px', textAlign: 'center', mb: 2 }}>Eventos</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1200px', gap: '20px' }}>
                {/* Tarjeta 1 */}
                <Box sx={cardStyle}>
                    <Typography sx={{textStyle,mb:10,mt:10}}>Concierto</Typography>
                    <Typography sx={textStyle}>Fecha</Typography>
                    <Typography sx={textStyle}>Hora</Typography>
                </Box>

                {/* Tarjeta 2 */}
                <Box sx={cardStyle}>
                    <Typography sx={{textStyle,mb:10,mt:10}}>Concierto</Typography>
                    <Typography sx={textStyle}>Fecha</Typography>
                    <Typography sx={textStyle}>Hora</Typography>
                </Box>

                {/* Tarjeta 3 */}
                <Box sx={cardStyle}>
                    <Typography sx={{textStyle,mb:10,mt:10}}>Concierto</Typography>
                    <Typography sx={textStyle}>Fecha</Typography>
                    <Typography sx={textStyle}>Hora</Typography>
                </Box>
            </Box>
        </Box>
    );
}

// Estilos para las tarjetas
const cardStyle = {
    width: '210px',
    borderRadius: '10px',
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/recital.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    p: 4,
    color: '#FFFFFF',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 700,
    fontSize: '25px',
    lineHeight: '36.13px',
    '&:nth-of-type(2n)': {
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/wine.jpg")',
    },
    height:'310px'
};

// Estilos para el texto dentro de las tarjetas
const textStyle = {
    fontFamily: 'Jost, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '23.12px',
    textAlign: 'start',
    mt: 2,
};

export default Events;
