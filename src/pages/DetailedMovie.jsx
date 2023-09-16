import Navbar from "../components/Navbar";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
function DetailedMovie() {

    const param = useParams();

    const [res, setRes] = useState({});
    const [load, setLoad] = useState(false);
    useEffect(() => {
        async function fetchData  (){
            const response = await axios.get(`https://api.tvmaze.com/shows/${param.id}`);
            setRes(response);
            setLoad(true);
            console.log(res);
        }
        fetchData();
    },[]);
return (
    <>
        <Navbar />

        {
            (load && res) ?
                <div>{res.title}</div>
            : console.log("error")
        }
    </>
)}

export default DetailedMovie