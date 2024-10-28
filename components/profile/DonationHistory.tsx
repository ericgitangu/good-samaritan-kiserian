// app/components/profile/DonationHistory.tsx
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Donation {
    date: Date;
    amount: number;
    method: string;
    // ... other donation properties
}

interface DonationHistoryProps {
    donations: Donation[];
}

const DonationHistory: React.FC<DonationHistoryProps> = ({ donations }) => {
    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Donation History
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Method</TableCell>
                            {/* Add more table headers if needed */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {donations.map((donation) => (
                            <TableRow
                                key={donation.date.toString()} // Assuming date is unique
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {donation.date.toLocaleDateString()}
                                </TableCell>
                                <TableCell align="right">{donation.amount}</TableCell>
                                <TableCell align="right">{donation.method}</TableCell>
                                {/* Add more table cells if needed */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DonationHistory;