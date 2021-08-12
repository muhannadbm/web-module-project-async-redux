import axios from 'axios'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

export const getFact = () => {
    return(dispatch) => {
        dispatch(fetchStart());
        axios.get(`https://random.dog/woof.json`)
        .then(res => {
            dispatch(fetchSuccess(res.data.url))
        })
        .catch(err => {
            dispatch(fetchError(err))
        })
    }
}

export const fetchStart = () => {
    return({type: FETCH_START})
}
export const fetchSuccess = (item) => {
    return({type: FETCH_SUCCESS, payload: item})
}
export const fetchError = (err) => {
    return({type: FETCH_ERROR, payload: err})
}