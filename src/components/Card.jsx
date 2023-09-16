import './Card.scss';
function Card(movie) {
return (
    <>
        <div className="movie-card" style={{backgroundImage: `url(${movie.image})`}}>
            <div className="movie-info">
                <p className="movie-release">{movie.releaseDate}</p>
                <h2 className="movie-title">{movie.title}</h2>
            </div>
        </div>
    </>
)}

export default Card