'use client'
// app/components/landing-page/HeroBanner.tsx
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Event } from '../../types/events'

const featuredEvent: Event = {
    id: '1',
    title: 'Sunday Service',
    description: 'Join us for our weekly worship service.',
    imageUrl: '/public/images/church-service.jpg', // Replace with an actual image path
    startDate: new Date(),
    endDate: new Date(),
}

const FeaturedEvent = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: theme.spacing(3),
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
}))

interface HeroBannerProps {
    featuredEvent: Event
}

const HeroBanner: React.FC<HeroBannerProps> = () => {
    const handleLearnMore = () => {
        // Navigate to the event details page
        // For example: router.push(`/events/${featuredEvent.id}`)
    }

    const handleDownloadICS = () => {
        // Trigger a download of the .ics file
        // You'll need to implement the logic to generate and download the .ics file
    }
    return (
        <Box
            sx={{
                backgroundImage: `url(${featuredEvent.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px', // Adjust the height as needed
                display: 'flex',
                alignItems: 'flex-end', // Align items to the bottom
                position: 'relative', // To position the FeaturedEvent absolutely
            }}
        >
            <FeaturedEvent>
                <Typography variant="h4" gutterBottom color="slate-200">
                    {featuredEvent.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {featuredEvent.description}
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="contained" color="primary" onClick={handleLearnMore}>
                        Learn More
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleDownloadICS}>
                        Download .ics
                    </Button>
                </Stack>
            </FeaturedEvent>
        </Box>
    )
}

export default HeroBanner