import React from 'react'
import { Link } from "react-router-dom";



const CourseItem = ({ course }) => {
    const { Name, description, imageUrl } = course
    return (
        <div className="column" float="left" width="50%">
            <div className="col s6 m4 l6">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img width="250" height="250" class="activator" src={imageUrl} />

                    </div>
                    {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
                    <div class="card-content">
                        <span class="card-title grey-text text-darken-4"><h2 className="teal-text">{Name}</h2>&nbsp; &nbsp;&nbsp;&nbsp;
                        <Link
                                to="/courseDetail"
                                class="btn-floating waves-effect waves-light teal  darken-1"
                            >
                                <i class="material-icons">keyboard_arrow_right</i>
                            </Link></span>
                    </div>
                    <div class="card-reveal">

                        <span class="card-title grey-text text-darken-4"><h3>{Name}</h3>< i class="material-icons right">close</i></span>
                        <h5>{description}</h5>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default CourseItem
