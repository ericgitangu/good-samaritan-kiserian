// app/publications/page.tsx
import * as React from 'react';
import Typography from '@mui/material/Typography';
import PublicationList from '../../components/publications/PublicationList';

const PublicationsPage: React.FC = () => {
    const publications = [
        {
            id: '1',
            title: 'Weekly Bulletin',
            description: 'This week\'s announcements and news.',
            pdfUrl: '/pdfs/weekly-bulletin.pdf',
            // ... other publication properties
        },
        // ... more publications
    ];

    return (
        <div>
            <Typography variant="h4" gutterBottom align="center">
                Publications
            </Typography>
            <PublicationList publications={publications} />
        </div>
    );
};

export default PublicationsPage;