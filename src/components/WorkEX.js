import "./WorkExStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

const WorkEX = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Summer Intern -</h3>
                <span className="bar"></span>
                <p className="btc">Airports Authority of India</p>
                <p>- Data Analyst-</p>
                <p>- May 2022-July 2022-</p>
                <p>- Maintaining and analysing vehicular maintainence records using Excel and Pandas -</p>
            </div>
            <div className="card">
                <h3>- ML intern -</h3>
                <span className="bar"></span>
                <p className="btc">Suvidha Foundation</p>
                <p>- Junior ML intern -</p>
                <p>- January 2023-Feb 2023-</p>
                <p>- Text summarization based algorithm deployment and pipeline building-</p>
                <Link to="https://github.com/Prajjwal00/Resume" className="btn">
                    RESUME
                </Link> 
            </div>
            <div className="card">
                <h3>-WFH intern-</h3>
                <span className="bar"></span>
                <p className="btc"> Smart knower</p>
                <p>-AutoCad Trainee-</p>
                <p>- Jan 2021-Feb 2021 -</p>
                <p>- Project Work on 2-D and 3-D designs ausing AUTOCAD and inventor-</p>
            </div>
        </div>
    </div>
  )
}

export default WorkEX
