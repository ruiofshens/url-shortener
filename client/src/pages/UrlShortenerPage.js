import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
import {Radio, RadioGroup, FormControlLabel, FormLabel} from '@mui/material';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { shortenURL, updateURL } from '../services/api';

const cardInfo =
{
    title: 'Shorten your URL here!',
    subheader: 'Free-of-charge, no ads and no tracking 😊',
    textField: 'Enter your URL!',
    buttonVariant: 'contained',
}

function URLShortenerPage() {

    const [longURL, setLongURL] = useState('');
    const [shortURL, setShortURL] = useState('');

    const [mode, setMode] = useState('add');

    const [displayedShortURL, setDisplayedShortURL] = useState('');

    const handleShortURLChange = (event) => {
        setShortURL(event.target.value);
    }

    const handleRadioClick = (event) => {
        setMode(event.target.value);
    }

    const handleChange = (event) => {
        setLongURL(event.target.value);
        setDisplayedShortURL("")
    }

    const handleClick = async () => {
        if (mode === "add"){
            const shortURL = await shortenURL(longURL);
            setDisplayedShortURL(shortURL);
        }
        else {
            const newShortURL = await updateURL(shortURL, longURL);
            setDisplayedShortURL(newShortURL);
        }
        
    }

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
                marginTop={8}
            >
                <Card
                sx = {{flexGrow: "1", mx: "10%"}}>
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
                                justifyContent: 'space-between',
                                flexDirection: 'column',
                            }}
                        >

                            {
                                mode === "update" && <TextField
                                id="outlined-basic"
                                label={"Enter existing short URL!"}
                                variant="outlined"
                                onChange={handleShortURLChange}  
                                sx={{ marginTop: 3, width: "75%"}}  
                            />}
                            
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label={cardInfo.textField}
                                variant="outlined"
                                onChange={handleChange}
                                padding="10px"
                                sx={{ my: 3}}
                                InputProps={{ endAdornment: 
                                <Button 
                                    variant={cardInfo.buttonVariant}
                                    onClick={handleClick}
                                >
                                    <IosShareIcon sx={{ color: "#191919" }} />
                                </Button> }}      
                            />
                            
                            <FormControl sx={{ alignSelf: 'center' }}>
                                <FormLabel id="demo-radio-buttons-group-label">What do you want to do?</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="add"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="add" control={<Radio onChange={handleRadioClick} />} label="Add New" />
                                    <FormControlLabel value="update" control={<Radio onChange={handleRadioClick} />} label="Update Existing" />
                                </RadioGroup>
                            </FormControl>
                            {displayedShortURL &&
                            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                                Success! Your new shortened URL is:
                                <Link href={` http://localhost:5000/shorten/${displayedShortURL}`}>
                                    http://localhost:5000/shorten/{displayedShortURL}
                                </Link>
                            </Typography>}
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