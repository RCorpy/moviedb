import React, {useState} from 'react'
import {connect} from 'react-redux'
import MovieCard from './MovieCard'
import MyModal from './Modal'


function Dramas(props) {
    const [modalShow, setModalShow] = useState(false);

    const activateModal = (movie) => {
        props.updateModal(movie)
        setModalShow(true)
    }

    return (
    <div>
        <div className="moviescontainer">
            {props.state.movies.map(movie => <div style={{cursor:"pointer"}} key={movie.id} onClick={()=>activateModal(movie)}><MovieCard movie={movie}/></div>)}
        </div>
        <MyModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
    )
}

const connectedDramas = connect(state => ({state:state}), (dispatch)=>({
    updateModal: (movie) => dispatch({
        type:'UPDATE_MODAL',
        movie: movie
    })
}))(Dramas)

export default connectedDramas;