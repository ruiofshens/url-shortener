import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const cardInfo =
{
    title: 'Shorten your URL here!',
    subheader: 'Free-of-charge, no ads, no tracking',
    textField: 'Enter your URL!',
    buttonVariant: 'contained',
}

function URLShortenerPage() {

    return (
        <>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ backgroundColor: "#ECDBBA", color: "#191919" }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <LinkIcon />
                    <Typography 
                        variant="h6" 
                        color="inherit" 
                        noWrap 
                        flexGrow={1} 
                        flexDirection='row' 
                        marginLeft={2}
                    >
                        URL-shortener
                    </Typography>
                    <Button 
                        href="https://github.com/ruiofshens" 
                        variant="outlined" 
                        sx={{ borderColor: "#191919", my: 1, mx: 1.5 }}
                    >
                        <GitHubIcon sx={{ color: "#191919" }} />
                    </Button>
                </Toolbar>
            </AppBar>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="75vh"
            >
                <Card width="30vw">
                    <CardHeader
                        title={cardInfo.title}
                        subheader={cardInfo.subheader}
                        titleTypographyProps={{ align: 'center' }}
                        subheaderTypographyProps={{ align: 'center' }}
                        sx={{ backgroundColor: "#C84B31" }}
                    />
                    <CardContent
                        sx={{ backgroundColor: "#2D4263" }}>
                        <Box
                            sx={{
                                display: 'flex',
                                height: '25vh',
                                width: "65vw",
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label={cardInfo.textField}
                                variant="outlined"
                                InputProps={{ endAdornment: 
                                <Button variant={cardInfo.buttonVariant}>
                                    <IosShareIcon sx={{ color: "#191919" }} />
                                </Button> }}      
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>

            <Container maxWidth="md" component="footer">
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                    Done by Chong Shen Rui.
                    {' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </>
    )
}

export default URLShortenerPage;