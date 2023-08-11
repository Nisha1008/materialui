import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Table } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
    return (
        <Layout>
            <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: 'bold', mb: 2 } }}>
                <Typography variant="h4">
                    Contact My Resturant
                </Typography>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem sit repellendus dolore eveniet? Obcaecati explicabo quas beatae aut in eveniet eligendi nam iusto error est assumenda sit, autem pariatur commodi!
                </p>
            </Box>
            <Box sx={{ m: 3, width: "600px", ml: 50, "@media(max-width:600px)": { width: '300px' } }}>
                <TableContainer component={Paper}>
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: "black", color: "white" }} align='center'>Contact Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 1800-00-9000 (tollfree)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <EmailIcon sx={{ color: 'skyblue', pt: 1 }} /> help@myrest.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: 'skyblue', pt: 1 }} /> 2735723537
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}

export default Contact
