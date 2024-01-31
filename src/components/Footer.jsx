import React from 'react'
import { Box, Typography } from '@mui/material'
import { List, ListItem, ListItemText } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

function Footer() {
    return (
        <Box sx={{ backgroundColor: '#AE9672', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', maxWidth: '90%',gap:'32px' }}>
                <Typography variant="h2" sx={{ fontFamily: 'Mosk', fontWeight: 700, fontSize: '31.25px', lineHeight: '37.5px', textAlign: 'center', color: '#FFFFFF', mb: { xs: 2, md: 0 } }}>LOGO</Typography>

                <Box sx={{ display: { xs: 'none', md: 'block' }, height: '100px', width: '2px', backgroundColor: '#F5F5F5', mx: 4 }}></Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mx: { xs: 2, md: 0 }, mb: { xs: 4, md: 0 },width:'30%' }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Mosk', fontWeight: 700, fontSize: '16px', lineHeight: '19.2px', textAlign: 'center', color: '#FFFFFF' }}>About Us</Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'Mosk', fontWeight: 300, fontSize: '12px', lineHeight: '13.98px', textAlign: 'center', color: '#FFFFFF' }}>Lorem ipsum dolor sit amet consectetur. Eget est diam pharetra porttitor malesuada facilisi. Dui lorem eget morbi diam. Sit justo vitae venenatis est nunc vel tellus auctor. Odio tincidunt tempor hendrerit nunc felis aliquet urna mollis quam</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mx: { xs: 2, md: 0 }, mb: { xs: 4, md: 0 } }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Mosk', fontWeight: 700, fontSize: '16px', lineHeight: '19.2px', textAlign: 'center', color: '#FFFFFF' }}>Quick Links</Typography>
                    <List sx={{ fontFamily: 'Mosk', fontWeight: 300, fontSize: '12px', lineHeight: '13.98px', textAlign: 'center', color: '#FFFFFF' }}>
                        <ListItem>
                            <ListItemText primary="Input" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Input" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Input" />
                        </ListItem>
                    </List>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mx: { xs: 2, md: 0 } }}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <LinkedInIcon sx={{ fontSize: 32, color: '#FFFFFF' }} />
                        <XIcon sx={{ fontSize: 32, color: '#FFFFFF' }} />
                    </Box>
                    <Typography variant="h2" sx={{ fontFamily: 'Mosk', fontWeight: 700, fontSize: '20px', lineHeight: '24px', textAlign: 'center', color: '#FFFFFF' }}>asdasd@asd.com</Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center',gap:'16px', mt: 4, px: 2, width: '100%' }}>
                <Typography sx={{ fontFamily: 'Mosk', fontWeight: 700, fontSize: '20px', lineHeight: '24px', textAlign: 'center', color: '#FFFFFF', mb: { xs: 2, md: 0 } }}>2023 Nombre. All right reserved</Typography>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Typography sx={{ fontFamily: 'Mosk', fontWeight: 300, fontSize: '12px', lineHeight: '13.98px', textAlign: 'center', color: '#FFFFFF' }}>Terminos y condiciones</Typography>
                    <Typography sx={{ fontFamily: 'Mosk', fontWeight: 300, fontSize: '12px', lineHeight: '13.98px', textAlign: 'center', color: '#FFFFFF' }}>Politicas y privacidad</Typography>
                    <Typography sx={{ fontFamily: 'Mosk', fontWeight: 300, fontSize: '12px', lineHeight: '13.98px', textAlign: 'center', color: '#FFFFFF' }}>Seguridad</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;

