import React, { useEffect } from 'react'
import CourseItem from './CourseItem'
import { connect } from 'react-redux'
import { loadUser } from '../../actions/userActions'
import { getMyCourses } from '../../actions/courseActions'

const MyCourses = ({ loadUser, user, myCourses, getMyCourses }) => {
    useEffect(() => {
        getMyCourses();
        if (localStorage.token) {
            loadUser()
        }
    }, [])
    return (
        <div>
            <div className="container center">
                <h1>
                    <span class="grey-text">My </span>
                    <span className="teal-text"> Courses</span>
                </h1>
            </div>
            <div className="container s10 m5">
                <div className="row">
                    {myCourses && myCourses.map((course) =>
                        <CourseItem course={course} key={course.id} />
                    )}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    myCourses: state.course.myCourses,
    user: state.user.user
})

export default connect(mapStateToProps, { loadUser, getMyCourses })(MyCourses)
