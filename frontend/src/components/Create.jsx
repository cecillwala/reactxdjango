import {React, useState} from 'react'
import AxiosInstance from './Axios';

function Create(){
    [country, useState] = useState([])
    const getData = async () =>{
        const response = await fetch('http://127.0.0.1:8000/country');
        country = await response.json();
    };
    getData();
    return(
        <div>
            This is the create page{country.data[0]}
        </div>
    )
}

export default Create;