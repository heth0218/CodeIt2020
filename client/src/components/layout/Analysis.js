import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'

const Analysis = ({ analytics }) => {

    // const [title, setTitle] = useState();
    // const [marks, setMarks] = useState();

    const state = {
        labels: analytics ? analytics.title : [12],
        datasets: [
            {
                label: 'Scores',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: analytics ? analytics.marks : [12]
            }
        ]
    }


    return (
        <div className='container'>
            <h4 className="teal-text">Student Analysis</h4>
            {analytics && <Line
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Quiz Scores',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />}
        </div >
    )
}

const mapStateToProps = (state) => ({
    analytics: state.course.analytics
})

export default connect(mapStateToProps, null)(Analysis)
