import axios from 'axios'
import { COURSE_ERROR, GET_COURSES, CLEAR_FILTER, FILTER_COURSES, SAVE_VIDEO, ADD_COURSE, GET_MY_COURSES } from './types'

export const getCourses = () => async dispatch => {
    try {
        const res = await axios.get('/api/course/all_courses');
        console.log(res.data.courses)
        dispatch({
            type: GET_COURSES,
            payload: res.data.courses
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
export const addCourse = (name, description) => async dispatch => {
    try {
        dispatch({
            type: ADD_COURSE,
            payload: { name, description }
        })
    } catch (error) {
        dispatch({
            type: COURSE_ERROR,
            payload: error.response.statusText
        })
    }
}

export const getMyCourses = () => async dispatch => {
    try {
        const res = await axios.get('/api/mycourse/');
        const data = res.data.data;
        console.log(data)
        const final = []
        data.map(course => {
            final.push(course.Course)
        })
        console.log(final)
        dispatch({
            type: GET_MY_COURSES,
            payload: final
        })


    } catch (error) {
        dispatch({
            type: COURSE_ERROR,
            payload: error.response.statusText
        })
    }
}