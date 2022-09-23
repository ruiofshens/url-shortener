import axios from 'axios';

const url = "http://localhost:5000/shorten";
//const url = "http://18.182.48.215:5000/shorten";

export const shortenURL = async (longURL) => {
    try {
        const { data } = await axios.post(url, {
            long_url: longURL
        });
        return data.data.shortURL;
    }
    catch (error) {
        console.log(error);
        console.log(error.message);
        alert(error.message);
    }
    
}