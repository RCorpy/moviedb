import {createStore} from 'redux';

const initialState = {
    movies: [],
    modal: {yeah:"hello"}
  };
    
function reducer(state = initialState, action) {
    console.log('reducer. action:', action);

    switch (action.type) {
    case 'LOAD_MOVIES':
        return {
            ...state,
            movies: action.movies
          };
    case 'UPDATE_MODAL':
        return {
            ...state,
            modal: action.movie
        }

    default:
        return state;
    }

}

const store = createStore(reducer);

export default store;