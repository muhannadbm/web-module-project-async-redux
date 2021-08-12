import {FETCH_START, FETCH_SUCCESS, FETCH_ERROR} from '../actions/appActions'

const initialState = {
    url: '',
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return({...state, isFetching: true })
        case FETCH_SUCCESS:
            return({...state, url: action.payload, isFetching: false })
        case FETCH_ERROR:
        return({...state, error: action.payload, isFetching: false })

        default: 
        return state
    }
}
export default reducer