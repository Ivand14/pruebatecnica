import React from 'react';
import { Bebidas, Postres, almuerzos, desayunosYcenas } from '../utils/dumissInfo';
import Cards from './Cards';
import Slider from "react-slick";
import { Box, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Recomendations() {
    const PrevArrow = (props) => (
        <Box className="slick-arrow slick-prev" {...props}>
            <ArrowBackIosNewIcon style={{ color: '#AE9672' }} />
        </Box>
    );

    const NextArrow = (props) => (
        <Box className="slick-arrow slick-next" {...props}>
            <ArrowForwardIosIcon style={{ color: '#AE9672' }} />
        </Box>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', textAlign: 'center', my: 5 }}>
                <Typography sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '2.5rem', lineHeight: '3.25rem', textAlign: 'center', mb: 3 }}>Tus recomendaciones</Typography>
            </Box>

            {[
                { title: 'Almuerzos', items: almuerzos },
                { title: 'Desayunos y Cenas', items: desayunosYcenas },
                { title: 'Postres', items: Postres },
                { title: 'Bebidas', items: Bebidas }
            ].map((section, index) => (
                <Box key={index} sx={{ my: 5 }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '1.5625rem', lineHeight: '2rem', textAlign: 'start', mb: 2, pl: 2 }}>{section.title}</Typography>
                    <Box sx={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>
                        <Slider {...settings}>
                            {section.items.map((item, index) => (
                                <Box key={index}>
                                    <Cards
                                        key={item.id}
                                        image={item.img}
                                        name={item.name}
                                        price={item.price}
                                    />
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default Recomendations;
