import Navbar from "../components/Navbar";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './DetailedMovie.scss';
import RatingBar from "../components/RatingBar";
function DetailedMovie() {

    const param = useParams();

    const [res, setRes] = useState({});
    const [load, setLoad] = useState(false);
    useEffect(() => {
        async function fetchData  (){
            const response = await axios.get(`https://api.tvmaze.com/shows/${param.id}`);
            setRes(response.data);
            setLoad(true);
        }
        fetchData();
    },[]);
return (
    <>
        <Navbar />
        {
            (load && res) ?
                <div className="movie-container">
                    <div className="left-section">
                        <img src={res.image.medium} alt={res.name} className="movie-image"/>
                    </div>
                    <div className="right-section">
                        <div className="movie-info">
                            <div className="line">
                                <h2 className="movie-name">{res.name}</h2>
                                <h4 className="movie-language">{res.language}</h4>
                            </div>
                            <h5 className="movie-genres">genres: {res.genres.map((el, i)=>
                                {
                                    if (i < res.genres.length -1)
                                        return (el+", ")
                                    else
                                        return (el)
                                    }
                                )
                                }
                            </h5>
                            <div className="movie-releasing line">
                                <h4>premiered: {res.premiered}</h4>
                                {
                                    (res.ended != null) ?
                                        <h4>ended: {res.ended}</h4>
                                    :
                                        <h4>still running</h4>
                                }
                                
                            </div>
                            <div className="movie-rating"> 
                                <RatingBar rating={res.rating.average}/>
                            </div>
                        </div>

                        <div className="movie-desc">
                                <p>{res.summary}</p>
                        </div>
                    </div>
                </div>
            : console.log("error with api")
        }
    </>
)}

export default DetailedMovie