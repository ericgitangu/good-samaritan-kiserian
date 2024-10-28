// app/components/profile/ProfileDetails.tsx
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface ProfileDetailsProps {
    user: {
        name: string;
        email: string;
        membershipNumber: string;
        // ... other user properties
    };
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ user }) => {
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Profile Details
            </Typography>
            <Typography variant="body1" gutterBottom>
                Name: {user.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Email: {user.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Membership Number: {user.membershipNumber}
            </Typography>
            {/* Display other user details */}
        </Box>
    );
};

export default ProfileDetails;