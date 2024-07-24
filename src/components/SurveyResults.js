// src/components/SurveyResults.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { surveyResults } from '../data/surveyResults';

const SurveyResults = () => {
    const { id } = useParams();
    const survey = surveyResults; // Normally, you would fetch or filter based on the ID

    if (!survey || survey.id !== parseInt(id)) {
        return <div>Survey not found</div>;
    }

    return (
        <div className="col-sm-9 content">
            <div className="dashhead-titles">
                <h6 className="dashhead-subtitle">Surveys</h6>
                <h2 className="dashhead-title">Survey Responses</h2>
            </div>
            <div className="survey-results-container">
                <div className="survey-name">{survey.title}</div>
                <div style={{marginBottom: "10px"}}>Survey Description: {survey.description}</div>
                <h3 className="UGH">CSV</h3>
                <textarea className="form-control">{survey.csv}</textarea>
                <h3 className="UGH2">JSON</h3>
                <textarea className="form-control">{JSON.stringify(survey.json, null, 2)}</textarea>
                {survey.questions.map((question, index) => (
                    <div className="survey-question" key={index}>
                        <div className="survey-question-text">{question}</div>
                        <ol className="survey-ol">
                            {survey.json.map((response, responseIndex) => (
                                <li key={responseIndex}>{response[`Q${index + 1}`]}</li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SurveyResults;