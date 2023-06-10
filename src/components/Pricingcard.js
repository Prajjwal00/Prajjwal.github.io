import "./PricingcardStyles.css"
import React from 'react'

const Pricingcard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Secondary Education -</h3>
                <span className="bar"></span>
                <p className="btc">95%</p>
                <p>- Green Fields School New Delhi -</p>
                <p>- Graduation : 2017 -</p>
                <p>- CBSE -</p>
                {/* <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link> */}
            </div>
            <div className="card">
                <h3>- Senior Secondary -</h3>
                <span className="bar"></span>
                <p className="btc">91.23%</p>
                <p>- Green Fields School New Delhi -</p>
                <p>- Graduation: 2019 -</p>
                <p>- CBSE-</p>
                {/* <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link> */}
            </div>
            <div className="card">
                <h3>- College -</h3>
                <span className="bar"></span>
                <p className="btc">8.5 CGPA</p>
                <p>- Netaji Subhas University of technology Delhi -</p>
                <p>- Graduation:2023 -</p>
                <p>- Major: Mechanical Enginerring-</p>
                <p>- Minor: Specialization in robotics and AI -</p>
                {/* <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link> */}
            </div>
        </div>
    </div>
  )
}

export default Pricingcard
