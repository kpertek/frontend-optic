import axios from "axios";
import authHeader from "../services/auth-header";

const API_URL = "http://localhost/api/";

export const imageURL = "http://localhost/api/images/";

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

export const fetchUserData = (url, callback) =>
{
    try
    {
        axios.get(API_URL + url, {headers: authHeader()})
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