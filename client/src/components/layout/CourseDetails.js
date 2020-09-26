import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import VideoPlayer from './VideoPlayer'
import { Link } from "react-router-dom";

const CourseDetails = ({ current, user }) => {
    const { Name, description, videos, quiz, Thumbnail } = current
    useEffect(() => {


    }, [])
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
            <div className="row">
                <div className="col s12 m12 l8">
                    <div className="collection">
                        {videos && videos.map((video) =>
                            <VideoPlayer video={video} key={video.id} />
                        )}
                    </div>
                </div>
            </div>
            {user.role === 'admin' && <div className="right">
                <Link to='/video' class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></Link>
            </div>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    current: state.course.currentCourse,
    user: state.user.user
})


export default connect(mapStateToProps, null)(CourseDetails)
