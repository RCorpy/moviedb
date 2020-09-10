import React from 'react'
import {Card} from 'react-bootstrap'


export default function MovieCard({movie}){
    
    return(
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} onError={(e)=>{e.target.onerror = null; e.target.src='https://ciudadccs.info/wp-content/uploads/2020/01/image-not-found-big.png'}} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Card.Text>
                    {movie.overview}
                    </Card.Text>
                    <Card.Text>Score: {movie.vote_average}</Card.Text>
                    <Card.Text>{movie.release_date}</Card.Text>
                </Card.ImgOverlay>
            </Card>
            
        </div>
    )
}

