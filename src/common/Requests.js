import axios from "axios";

export const fetchData = (url, callback) =>
{
    try
        {
            axios.get(url, {})
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                //data = Array.from(data);
                console.log(data);
                callback(data);
            })
        }
        catch (error)
        {
            console.log(error);
        }
}