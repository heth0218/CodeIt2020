import axios from 'axios'
import { COURSE_ERROR, GET_COURSES, CLEAR_FILTER, FILTER_COURSES, SAVE_VIDEO } from './types'

export const getCourses = () => async dispatch => {
    try {
        const res = await axios.get('/api/course');
        console.log(res.data)
        dispatch({
            type: GET_COURSES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: COURSE_ERROR,
            payload: error.response.statusText
        })
    }
}
export const filterCourses = (text) => {
    return {
        type: FILTER_COURSES,
        payload: text,
    };
};

export const clearFilter = () => {
    return {
        type: CLEAR_FILTER,
    };
};

export const saveVideo = (courseId, url) => async dispatch => {
    try {
        dispatch({
            type: SAVE_VIDEO,
            payload: { courseId, url }
        })
    } catch (error) {
        dispatch({
            type: COURSE_ERROR,
            payload: error.response.statusText
        })
    }
}