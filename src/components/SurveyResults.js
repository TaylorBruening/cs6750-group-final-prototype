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
        <div className="survey-results-container">
            <h1>{survey.title}</h1>
            <p>Survey Description: {survey.description}</p>
            <h2>CSV</h2>
            <textarea className="form-control">{survey.csv}</textarea>
            <h2>JSON</h2>
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
    );
};

export default SurveyResults;