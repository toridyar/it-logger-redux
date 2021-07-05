import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG } from './types'

// Get logs from server
export const getLogs = () => {
    return async (dispatch) => {
        try {
            setLoading();

            const res = await fetch('/logs');
            const data = await res.json();

            dispatch({
                type: GET_LOGS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data
            })
        }
    }
}

// Add new log
export const addLog = (log) => {
    return async (dispatch) => {
        try {
            setLoading();

            const res = await fetch('/logs', {
                method: 'POST',
                body: JSON.stringify(log),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();

            dispatch({
                type: ADD_LOG,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data
            })
        }
    }
}

// Delete log from server
export const deleteLog = (id) => {
    console.log(id)
    return async (dispatch) => {

        try {
            setLoading();

            const res = await fetch(`/logs/${id}`, {
                method: 'DELETE',
            });

            const data = await res.json();

            dispatch({
                type: DELETE_LOG,
                payload: id
            });
        } catch (err) {
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.statusText
            });
        }
    }
};

//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}