import React from 'react'
import { connect } from 'react-redux'

const GoogleForm = ({ quiz }) => {
    console.log(quiz)
    return (
        <div className="container">
            <div className="center">
                <h3 className="teal-text">{quiz.Title}</h3>
                <h6>{quiz.Description}</h6>
            </div>
            <br />
            <iframe src={quiz.Link} width="100%" height="945" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    )
}


const mapStateToProps = (state) => ({
    quiz: state.course.quiz
})

export default connect(mapStateToProps, null)(GoogleForm)
