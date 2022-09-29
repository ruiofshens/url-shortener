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
        console.log(error.message);
        if (error.response.status === 422) {
            alert(`The provided URL has been shortened previously: http://localhost:5000/shorten/${error.response.data.data.shortURL}`);
        }
    }
}

export const updateURL = async (shortURL, longURL) => {
    console.log("updating");
    try {
        const { data } = await axios.put(url + "/" + shortURL, {
            long_url: longURL
        });
        console.log(data)
        return data.data.shortURL;
    }
    catch (error) {
        console.log(error.message);
        // if (error.response.status === 422) {
        //     alert(`The provided URL has been shortened previously: http://localhost:5000/shorten/${error.response.data.data.shortURL}`);
        // }
    }
}