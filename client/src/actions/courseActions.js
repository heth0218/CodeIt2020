import axios from 'axios'
import { COURSE_ERROR, GET_COURSES, CLEAR_FILTER, FILTER_COURSES, SAVE_VIDEO, ADD_COURSE, GET_MY_COURSES, SET_CURRENT } from './types'

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

export const saveVideo = (current_id, title, url) => async dispatch => {
    try {
        const doc = {
            Title: title,
            Vurl: url
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY2ZWUxYmI2NDdlNjc3MWRjNTYxNDIzIn0sImlhdCI6MTYwMTEyNTI3NiwiZXhwIjoxNjAxNDg1Mjc2fQ.xHrwixX__cqgzpbtu2qpx69qNz2URCGFo9bPha2pTv4'
            }
        }
        const response = await axios.post(`api/videos/add_video/5f6e4f1df2b87e5994d6092a`, doc, config)
        console.log(response.data)
        dispatch({
            type: SAVE_VIDEO,
            payload: { url }
        })
    } catch (error) {
        dispatch({
            type: COURSE_ERROR,
            payload: error.response.statusText
        })
    }
}
export const addCourse = (name, description, url) => async dispatch => {

    const doc = {
        Name: name,
        description,
        Thumbnail: url
    }
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post('/api/course/create_course', doc, config)
        console.log(response.data);
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

export const setCurrent = (course) => async dispatch => {
    try {
        dispatch({
            type: SET_CURRENT,
            payload: course
        })
    } catch (error) {
        dispatch({
            type: COURSE_ERROR,
            payload: error.response.statusText
        })
    }
}