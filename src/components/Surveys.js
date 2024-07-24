import React, { useState, useEffect } from 'react';
import './Surveys.css';
import CircularProgress from "@mui/material/CircularProgress";

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
    responses: 36,
  },
];

const Surveys = () => {
      const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

    if (loading) {
      return <CircularProgress/>
  }

  return (
      <div className="surveys-container">
        <div className="nav-header">SURVEYS</div>
        <div className="header">
          <h2 className="survey-title">Your Surveys</h2>
          <button className="add-new">+ Add New</button>
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
                <td>
                  <button className="btn edit">edit</button>
                  <button className="btn questions">questions</button>
                  <button className={`btn ${survey.responses > 0 ? 'share' : 'share-disabled'}`}>share</button>
                  <button
                      className={`btn responses ${survey.responses > 0 ? 'responses-active' : 'responses-disabled'}`}>
                    responses{survey.responses > 0 ? `(${survey.responses})` : ''}
                  </button>
                </td>
                <td>{`${survey.course} ${survey.code}`}</td>
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
