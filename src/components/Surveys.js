import React, { useState, useEffect } from 'react';
import './Surveys.css';
import CircularProgress from "@mui/material/CircularProgress";
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

const surveys = [
  {
    id: 1,
    course: 'Human-Computer Interaction',
    code: 'CS6750-SU24',
    title: 'testing',
    status: 'unpublished',
    responses: 0,
  },
  {
    id: 2,
    course: 'Human-Computer Interaction',
    code: 'CS6750-SU24',
    title: 'Redefining Survey Results: Your Feedback Matters!',
    status: 'published',
    responses: 13,
  },
  {
    id: 3,
    course: 'Natural Studies on Local Fauna',
    code: 'NA6530-SP24',
    title: 'A study on wild bears',
    status: 'published',
    responses: 10,
  },
  {
    id: 4,
    course: 'Natural Studies on Local Fauna',
    code: 'NA6530-SP24',
    title: "Can bears survive on honey alone? A survey",
    status: 'published',
    responses: 54,
  },
];

const Surveys = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <CircularProgress sx={{ "color": "#1997c6" }} />;
    }

    return (
        <div className="surveys-container">
            <Helmet>
                <title>Your Surveys</title>
            </Helmet>
            <div className="ugh">
                <div className="nav-header">SURVEYS</div>
                <div className="header">
                    <h2 className="survey-title">Your Surveys</h2>
                    <button className="add-new">+ Add New</button>
                </div>
            </div>
            <table className="surveys-table">
                <thead>
                    <tr>
                        <th>Options</th>
                        <th>Course</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {surveys.map((survey) => (
                        <tr key={survey.id}>
                            <td className="options">
                                <button className="btn edit">edit</button>
                                <button className="btn questions">questions</button>
                                <button className={`btn ${survey.responses > 0 ? 'share' : 'share-disabled'}`}>share</button>
                                <Link to={`/survey/${survey.id}/responses`} className={`btn ${survey.responses > 0 ? 'responses-active' : 'responses-disabled'}`}>
                                    responses{survey.responses > 0 ? `(${survey.responses})` : ''}
                                </Link>
                            </td>
                            <td>
                                {survey.course}
                                <div className="course-code">{survey.code}</div>
                            </td>
                            <td>{survey.title}</td>
                            <td className={`status ${survey.status}`}>{survey.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Surveys;