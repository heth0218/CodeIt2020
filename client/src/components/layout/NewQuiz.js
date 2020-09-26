import React, { useState } from 'react'
import { connect } from 'react-redux'
import { newQuiz } from '../../actions/courseActions'
import M from 'materialize-css/dist/js/materialize.min.js';
import { useHistory } from 'react-router-dom'

const NewQuiz = ({ current, newQuiz }) => {
    const [quiz, setQuiz] = useState({
        title: '',
        description: '',
        url: ''
    })
    const { title, description, url } = quiz;
    let history = useHistory()

    const onChange = e => setQuiz({ ...quiz, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();

        console.log(title, description, url)
        const doc = {
            Title: title,
            Description: description,
            Link: url,
            Course: current._id
        }
        newQuiz(doc);
        history.push("/")
        M.toast({ html: 'New quiz has been added!' })

    }
    return (
        <div>
            <section className="section section-login">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="card-panel login teal darken-2 white-text center">
                                <h2>New Quiz</h2>
                                <form>
                                    <div className="input-field">
                                        <div className="material-icons prefix">Title</div>
                                        <input type="text" name='title' value={title} id="title" onChange={onChange} />
                                        <label className="white-text" for="title">Title</label>
                                    </div>
                                    <div className="input-field">
                                        <div className="material-icons prefix">Description</div>
                                        <input type="text" name='description' value={description} id="description" onChange={onChange} />
                                        <label className="white-text" for="description">Description</label>
                                    </div>
                                    <div className="input-field">
                                        <div className="material-icons prefix">Url</div>
                                        <input type="text" name='url' value={url} id="url" onChange={onChange} />
                                        <label className="white-text" for="url">Url</label>
                                    </div>
                                    <input type="submit" value="Add The Quiz" onClick={onSubmit}
                                        className="btn btn-large btn-extended waves-effect waves-grey white black-text" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}


const mapStateToProps = (state) => ({
    current: state.course.currentCourse
})

export default connect(mapStateToProps, { newQuiz })(NewQuiz)
