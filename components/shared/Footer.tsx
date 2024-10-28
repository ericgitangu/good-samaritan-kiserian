'use client'
// app/components/shared/Footer.tsx
import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

function Copyright({ year }: { year: number }) {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#" className="no-underline">
                Good Samaritan Church, Kiserian
            </Link>{' '}
            {year}
            {'.'}
        </Typography>
    )
}

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <Box
            component="footer"
            sx={{
                px: 2,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
            className="w-full mb-0"
        >
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom color="text.primary">
                            Good Samaritan Church, Kiserian
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Link href="https://maps.app.goo.gl/K7e2wuvk8yuvgUEX9" variant="body2" color="text.secondary">
                                ACK Road, Kiserian
                                <br />
                                Kiserian, Kenya
                            </Link>
                            <br />
                            Email: info@gsck.org
                            <br />
                            Phone: <Link href="tel:+254708078997" variant="body2" color="text.secondary">+254 722 328378</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="#" variant="body2" color="text.secondary">
                            Home
                        </Link>
                        <br />
                        <Link href="#" variant="body2" color="text.secondary">
                            Live Stream
                        </Link>
                        <br />
                        <Link href="#" variant="body2" color="text.secondary">
                            Publications
                        </Link>
                        <br />
                        <Link href="#" variant="body2" color="text.secondary">
                            About Us
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>
                            Connect With Us
                        </Typography>
                        <Link href="#" variant="body2" color="text.secondary">
                            <FacebookIcon sx={{ mr: 1 }} /> Facebook
                        </Link>
                        <br />
                        <Link href="#" variant="body2" color="text.secondary">
                            <TwitterIcon sx={{ mr: 1 }} /> Twitter
                        </Link>
                        <br />
                        <Link href="#" variant="body2" color="text.secondary">
                            <InstagramIcon sx={{ mr: 1 }} /> Instagram
                        </Link>
                    </Grid>
                </Grid>
                <Copyright year={year} />
            </Container>
        </Box>
    )
}