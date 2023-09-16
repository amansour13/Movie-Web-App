import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import './Home.scss';
function Home (){
    const [res, setRes] = useState([]);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        async function fetchData  (){
            const response = await axios.get("https://api.tvmaze.com/shows");
            setRes(response.data);
            setLoad(true)
        }
        fetchData();
    },[]);

    return (
        <>
            <Navbar />
            <div className='container'>
                {
                    load && res.map((el,i) => {
                        return <Card id={el.id} status = {el.status} title={el.name} image={el.image.medium} desc={el.summary} releaseDate = {el.premiered}/>;
                        console.log(res)
                    })
                }
                
            </div>
            
        </>
    );
}
export default Home