import axios from "axios";

const API_URL = "http://localhost/api/";

export const fetchData = (url, callback) =>
{
    try
    {
        axios.get(API_URL + url, {})
        .then((response) => {
            return response.data;
        })
        .then((data) => {
            callback(data);
        })
        .catch(() => {})
    }
    catch (error)
    {
        console.log(error);
    }
}