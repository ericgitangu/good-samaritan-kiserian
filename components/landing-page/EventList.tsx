// app/components/landing-page/EventList.tsx
import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Event } from '../../types/events'

interface EventListProps {
    events: Event[]
}

const EventList: React.FC<EventListProps> = ({ events }) => {
    return (
        <Box sx={{ my: 4 }}> {/* Add some margin */}
            <Typography variant="h5" gutterBottom align="center" className="bg-black text-white opacity-50">
                Upcoming Events
            </Typography>
            <Grid container spacing={3}>
                {events.map((event) => (
                    <Grid item key={event.id} xs={12} sm={6} md={4}>
                        <Box
                            sx={{
                                backgroundImage: `url(${event.imageUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '200px', // Adjust the height as needed
                                borderRadius: '10px', // Add rounded corners
                                overflow: 'hidden', // Hide overflowing image
                                color: 'white', // Ensure text is visible on dark background
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '16px', // Add padding for better text spacing
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                {event.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {event.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default EventList