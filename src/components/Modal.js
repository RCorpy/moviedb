import React from 'react'
import {Modal, Container, Row, Col, Button} from 'react-bootstrap'
import {connect} from 'react-redux'

function MyModal(props){
    const movie = props.state.modal
    return (
        <Modal size="lg" {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {movie.original_title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <Row>
                <Col md={5}>
                    <div className="modalimage">
                        <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} onError={(e)=>{e.target.onerror = null; e.target.src='https://ciudadccs.info/wp-content/uploads/2020/01/image-not-found-big.png'}} alt="Card" />
                    </div>
                </Col>
                <Col md={7}>
                    <div className="modaloverview">
                        {movie.overview}
                    </div>
                </Col>
              </Row>
    
              <Row>
                <Col md={4}>
                    <div className="modalattributes">
                        Popularity: {movie.popularity}
                    </div>
                </Col>
                <Col md={4}>
                    <div className="modalattributes">  
                        Viewers Score: {movie.vote_average}
                    </div>
                </Col>
                <Col md={4}>
                    <div className="modalattributes">
                        Release date: {movie.release_date}
                    </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );

}

const connectedModal = connect(state => ({state:state}), null)(MyModal)

export default connectedModal;