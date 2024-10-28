// app/components/publications/PublicationCard.tsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Publication } from '../../types/publication';

interface PublicationCardProps {
    publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {publication.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {publication.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Link href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
                        View PDF
                    </Link>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PublicationCard;