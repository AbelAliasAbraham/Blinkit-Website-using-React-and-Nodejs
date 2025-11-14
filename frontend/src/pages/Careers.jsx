import React from 'react';
import { Link } from 'react-router-dom';
import './css/Careers.css'; // 🔑 Import the CSS file

const Careers = () => {
    // Sample Job Openings Data
    const jobOpenings = [
        {
            title: "Frontend Developer (React.js)",
            location: "Bangalore, India",
            type: "Full-Time",
            link: "#apply-fe"
        },
        {
            title: "Last Mile Delivery Partner",
            location: "Local City Branches",
            type: "Contract",
            link: "#apply-delivery"
        },
        {
            title: "Data Analyst",
            location: "Remote",
            type: "Full-Time",
            link: "#apply-data"
        },
        {
            title: "Warehouse Operations Manager",
            location: "Gurgaon, India",
            type: "Full-Time",
            link: "#apply-ops"
        },
    ];

    return (
        <div className="container careers-container">
            <h1 className="section-title">Join the Quick Commerce Revolution</h1>
            <p className="careers-tagline">
                We are building the future of instant delivery. If you thrive in a fast-paced environment and love a challenge, you belong with us.
            </p>

            {/* Culture Section */}
            <section className="careers-section culture-section">
                <h2 className="section-subtitle">Our Culture: Speed, Innovation, Impact</h2>
                <div className="culture-points">
                    <div className="culture-card">
                        <h3>⚡ Speed</h3>
                        <p>We move fast. Decisions are quick, and execution is rapid. We deliver in minutes, and we innovate in days.</p>
                    </div>
                    <div className="culture-card">
                        <h3>💡 Innovation</h3>
                        <p>We leverage cutting-edge tech, from inventory management to route optimization, to stay ahead of the curve.</p>
                    </div>
                    <div className="culture-card">
                        <h3>🌍 Impact</h3>
                        <p>Every role here directly impacts the daily lives of thousands of customers, giving you meaningful work every day.</p>
                    </div>
                </div>
            </section>

            {/* Current Openings Section */}
            <section className="careers-section openings-section">
                <h2 className="section-subtitle">Current Job Openings</h2>
                <div className="openings-list">
                    {jobOpenings.map((job, index) => (
                        <div className="job-card" key={index}>
                            <h3 className="job-title">{job.title}</h3>
                            <div className="job-meta">
                                <span className="job-location">{job.location}</span>
                                <span className="job-type">{job.type}</span>
                            </div>
                            <a href={job.link} className="button apply-button">Apply Now</a>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="careers-section cta-section">
                <p>Don't see a role that fits? Send us your resume anyway!</p>
                <Link to="/contact" className="button cta-button">Submit General Application</Link>
            </section>

        </div>
    );
};

export default Careers;