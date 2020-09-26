import { GET_COURSES, COURSE_ERROR, FILTER_COURSES, CLEAR_FILTER, SAVE_VIDEO, ADD_COURSE, GET_MY_COURSES, SET_CURRENT } from '../actions/types'
import heth from '../photos/heth.jpeg'
import jash from '../photos/jash.jpeg'
import jenish from '../photos/jenish.jpeg'
import mihir from '../photos/mihir.jpeg'

const initialState = {
    courses: [
        {
            id: 1,
            name: "Course 1",
            description: "First course you see",
            imageUrl: heth
        },
        {
            id: 2,
            name: "Course 2",
            description: "Second course you see",
            imageUrl: jenish
        },
        {
            id: 3,
            name: "Jash",
            description: "Third course you see",
            imageUrl: jash
        },
        {
            id: 4,
            name: "Course 4",
            description: "Fourth course you see",
            imageUrl: mihir
        }

    ],
    error: null,
    currentCourse: null,
    myCourses: [
        {
            id: 1,
            name: "Course 1",
            description: "First course you see",
            imageUrl: heth
        },
        {
            id: 2,
            name: "Course 2",
            description: "Second course you see",
            imageUrl: jenish
        },
        {
            id: 3,
            name: "Jash",
            description: "Third course you see",
            imageUrl: jash
        }
    ],
    filtered: null,
    videos: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        case COURSE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case FILTER_COURSES:
            return {
                ...state,
                filtered: state.courses.filter(course => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return course.Name.match(regex);
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        case SAVE_VIDEO:
            return {
                ...state,
                videos: [action.payload, ...state.videos]
            }
        case ADD_COURSE:
            console.log(action.payload)
            return {
                ...state,
                courses: [action.payload, ...state.courses]
            }
        case GET_MY_COURSES:
            return {
                ...state,
                myCourses: action.payload
            }
        case SET_CURRENT:
            return {
                ...state,
                currentCourse: action.payload
            }
        default:
            return { ...state }
    }
}