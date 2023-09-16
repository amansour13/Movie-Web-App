import './Card.scss';
import { Link } from 'react-router-dom';
function Card(movie) {
    const link = '/movie/' + movie.id;
return (
    <>
     <Link to={link}>
        <div className="movie-card" style={{backgroundImage: `url(${movie.image})`}}>
            <div className="movie-info">
                <div>
                    <p className="movie-release">{movie.releaseDate}</p>
                    <p className='movie-status'>{movie.status}</p>
                </div>
                <div className='title'>
                    <h2 className="movie-title">{movie.title}</h2>
                </div>
            </div>
        </div>
        </Link>
    </>
)}

export default Card