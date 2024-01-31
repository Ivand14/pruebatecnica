import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, Typography } from '@mui/material';
import Navbar from './Navbar'

function Header() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                width: '100%',
                minHeight: '376px', // Cambiado a minHeight para permitir crecimiento
                backgroundImage: 'url("../src/assets/fondoPrueba.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Overlay negro semitransparente */}
            <Box
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%', // Modificado para cubrir toda la altura
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color negro con opacidad del 50%
                }}
            />

            <Navbar />

            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '90%', gap: '24px', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ fontWeight: '900', fontSize: { xs: '32px', sm: '48px' }, lineHeight: '1.2', color: '#F5F5F5', fontFamily: 'Jost, sans-serif', zIndex: 1 }}>Nombre del hotel</Typography>
                <TextField
                    InputProps={{
                        sx: {
                            textAlign: 'center', // Centra el texto dentro del TextField
                            height: '40px',
                            backgroundColor: '#FFFFFF',
                            width: '100%',
                            maxWidth: '420px',
                            borderRadius: '10px',
                            color: '#AE9672',
                            fontWeight: '500',
                            fontSize: '16px',
                            padding: '8px 16px',
                        },
                        placeholder: 'Hacer Reserva' // Coloca el placeholder aquí
                    }}
                />
            </Box>
        </Box>
    )
}

export default Header;

