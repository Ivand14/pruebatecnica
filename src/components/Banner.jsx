import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Typography } from '@mui/material';
import { Banners } from "../utils/dumissInfo";
import Button from '@mui/material/Button';

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnHover: true
        };
        return (
            <Box sx={{
                backgroundColor: '#AE9672',
                height: 'auto',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center', // Center horizontally
                margin: '100px 0',
                padding: '20px'
            }}>
                <Box sx={{ width: '70%' }}>
                    <Slider {...settings}>
                        {Banners.map((bn, index) => (
                            <Box key={index} sx={{ marginBottom: '20px' }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '80px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    '@media (max-width: 768px)': {
                                        flexDirection: 'column',
                                        gap: '20px',
                                        alignItems: 'center'
                                    }
                                }}>
                                    <Box>
                                        <img src={bn.img} style={{ width: '100%', maxWidth: '446px', height: 'auto', borderRadius: '10px' }} alt={bn.nameRoom} />
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', my: 2 }}>
                                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '31px', lineHeight: '37.52px', textAlign: 'start', color: '#FFFFFF' }}>{bn.nameRoom}</Typography>

                                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '19px', lineHeight: '22.99px', textAlign: 'start', color: '#FFFFFF' }}>{bn.description}</Typography>

                                        <Button 
                                            variant="contained" 
                                            sx={{ 
                                                width: '100%', 
                                                maxWidth: '359px', 
                                                height: '40px', 
                                                backgroundColor: '#FFFFFF', 
                                                borderRadius: '10px', 
                                                padding: '8px', 
                                                gap: '8px', 
                                                color: '#AE9672', 
                                                fontSize: '20px', 
                                                fontFamily: 'Inter, sans-serif', 
                                                lineHeight: '24.2px', 
                                                textAlign: 'justify', 
                                                textTransform: 'capitalize',
                                                '&:hover': {
                                                    backgroundColor: '#CCCCCC' // Color más oscuro al pasar el cursor
                                                } 
                                            }} 
                                        >
                                            Hacer Reservación
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>
        );
    }
}

