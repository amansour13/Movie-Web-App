import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
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
                        // return <Card id={el.id} title={el.title} image={el.thumbnail} price={el.price} rating={el.rating} dis={el.discountPercentage}/>;
                        console.log(res)
                    })
                }
                
            </div>
            
        </>
    );
}
export default Home