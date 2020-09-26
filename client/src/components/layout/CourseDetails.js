import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import VideoPlayer from './VideoPlayer'
import { Link } from "react-router-dom";
import { setQuiz, getAnalytics, showAll } from '../../actions/courseActions'

const CourseDetails = ({ myCourses, current, user, setQuiz, getAnalytics, showAll }) => {
    const { Name, description, videos, quiz, Thumbnail } = current
    const [mine, setMine] = useState(false);

    useEffect(() => {
        if (myCourses) {
            myCourses.map(course => {
                if (course._id === current._id) {
                    setMine(true)
                }
            })
        }

    }, [mine])
    const setQuizz = (qu) => {
        setQuiz(qu)
    }
    const getAnalyticss = () => {
        getAnalytics(current._id, user._id)
    }
    const getAllUsers = () => {
        showAll(current._id)
    }
    return (
        <div className="container" style={{ marginBottom: '100px' }}>
            <div className="center">
                <h1>
                    <span class="grey-text">Course</span>
                    <span className="teal-text"> Details</span>
                </h1>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="col">
                    <div className="card red lighten-5">
                        <div className="card-image">
                            <img src={Thumbnail} />
                            <h3><span className="card-title teal-text">{Name}</span></h3>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            {mine && <div >
                <h4 className="teal-text">Book special doubt solving sessions with experts</h4>
                <br />
                <Link to="/personalMeet" className="btn waves-effect waves-light"><i className="material-icons left">event</i>Book Personal Meet</Link>
                <br /><br />
                <Link to="/getAnalytics" onClick={getAnalyticss} className="btn waves-effect waves-light"><i className="material-icons left">analytics</i>Analyse your performance</Link>

            </div>}
            <div className="center"><h3 className="teal-text">Range of Tutorials for this course</h3></div>
            <div className="row">
                <div className="col s12 m12 l8">
                    <div className="collection">
                        {videos && videos.map((video) =>
                            <VideoPlayer video={video} key={video.id} />
                        )}
                    </div>
                </div>
            </div>
            <div className="center"><h3 className="teal-text">Fun Quizes waiting for you!</h3></div>
            <div className="row">
                <div className="col s12 m12 l8">
                    <div className="collection">
                        {((mine && quiz) || (user.role === 'admin' && quiz)) && quiz.map((qu) =>
                            <div>
                                <Link href="#!" to='/google' class="collection-item" onClick={setQuizz.bind(this, qu)} ><span class="badge"></span><h4>{qu.Title}</h4><br /><p>{qu.Description}</p></Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {
                user.role === 'admin' && <div className="right">
                    <Link to='/video' class="btn-floating btn-large waves-effect waves-light teal"><i class="material-icons">add</i></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/newQuiz' class="btn btn-large waves-effect waves-light teal">Add New Quiz</Link>
                </div>
            }
            {
                user.role === 'admin' && (
                    <Link to='/showAll' onClick={getAllUsers} class="btn btn-large waves-effect waves-light teal">Get Analytics</Link>

                )
            }
        </div >
    )
}

const mapStateToProps = (state) => ({
    current: state.course.currentCourse,
    user: state.user.user,
    myCourses: state.course.myCourses,

})


export default connect(mapStateToProps, { setQuiz, getAnalytics, showAll })(CourseDetails)
