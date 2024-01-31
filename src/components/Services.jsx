import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ServiceCard from './ServiceCard';
import { services } from '../utils/dumissInfo';

function Services() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 5 }}>
                <Typography variant="h2" sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '25px', lineHeight: '36.13px', textAlign: 'center', mb: 1 }}>Servicios</Typography>
                <Box sx={{ width: '60%', maxWidth: '1200px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                    {services.map((service, index) => (
                        <ServiceCard key={index} image={service.img} name={service.name} />
                    ))}
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',mb:10 }}>
                <Typography variant="h2" sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 700, fontSize: '32px', lineHeight: '46.24px', textAlign: 'center', m: 5, color: '#AE9672' }}>Clasifica tu experiencia</Typography>
                <Button variant="contained" sx={{ width: '80%', maxWidth: '338px', height: '39px', borderRadius: '10px', backgroundColor: '#000000', textTransform: 'capitalize', color: '#FFFFFF', fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '23.12px' }}>Clasificar</Button>
            </Box>
        </Box>
    );
}

export default Services;