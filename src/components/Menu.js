import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap'

const POPULAR_EXTENSION = '/discover/movie?sort_by=popularity.desc'
const DRAMA_EXTENSION = '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10'
const THIS_YEAR_EXTENSION = '/discover/movie?primary_release_year=2010&sort_by=vote_average.desc'

function Menu(props) {

    const [searchedMovie, setSearchedMovie] = useState("")

    const get_movies = (extension) => {
        
        fetch('https://api.themoviedb.org/3'+extension+'&api_key=d4025d9b663e84059d8d7d65f2061252')
        .then(data=> data.json())
        .then(json => {console.log(json.results);props.loadPopulars(filterResultsWithoutImage(json.results))})  
    }
    
    const searchMovie= (query) =>{

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=d4025d9b663e84059d8d7d65f2061252&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(data=> data.json())
        .then(json => props.loadPopulars(filterResultsWithoutImage(json.results)))  
    }

    const filterResultsWithoutImage = (originalArray) =>{
        return originalArray.filter(element=> element.backdrop_path)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        searchMovie(searchedMovie);
        setSearchedMovie("")
    }

    return(
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>TheMovieDB</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/Home"><Button>Home</Button></Link>
                    <Link to="/Populars"><Button onClick={()=>get_movies(POPULAR_EXTENSION)}>Populars</Button></Link>
                    <Link to="/Dramas"><Button onClick={()=> get_movies(DRAMA_EXTENSION)}>Dramas</Button></Link>
                    <Link to="/ThisYear"><Button onClick={()=>get_movies(THIS_YEAR_EXTENSION)}>This Year</Button></Link>
                </Nav>
                <Form inline onSubmit={handleSubmit}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>setSearchedMovie(e.target.value)} value={searchedMovie}/>
                <Link to="/Search">
                    <Button variant="outline-light" onClick={handleSubmit}>Search</Button>
                </Link>
                </Form>
            </Navbar>
        </div>
    )
}



const connectedMenu = connect(state=>({state:state}), (dispatch)=>({
    loadPopulars: (popularMovies) => dispatch({
        type:'LOAD_MOVIES',
        movies: popularMovies
    })
}))
(Menu)

export default connectedMenu