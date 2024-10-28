// app/components/publications/PublicationList.tsx
import * as React from 'react';
import Grid from '@mui/material/Grid';
import PublicationCard from './PublishCard';
import { Publication } from '../../types/publication'; // Assuming you have a Publication type defined

interface PublicationListProps {
    publications: Publication[];
}

const PublicationList: React.FC<PublicationListProps> = ({ publications }) => {
    return (
        <Grid container spacing={3}>
            {publications.map((publication) => (
                <Grid item key={publication.id} xs={12} sm={6} md={4}>
                    <PublicationCard publication={publication} />
                </Grid>
            ))}
        </Grid>
    );
};

export default PublicationList;