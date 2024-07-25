// src/components/SurveyResults.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { surveyResults } from '../data/surveyResults';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Treemap } from 'recharts';

const SurveyResults = () => {
    const { id } = useParams();
    const surveyId = parseInt(id, 10);
    const survey = surveyResults.find(s => s.id === surveyId);

    if (!survey) {
        return <div>Survey not found</div>;
    }

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF19A3', '#FFC019', '#19FFC8', '#197FFF', '#C119FF', '#FF1919', '#19FF91'];

    // eslint-disable-next-line react-hooks/rules-of-hooks
const [chartTypes, setChartTypes] = useState(
  survey.questions.map((_, index) => index % 2 === 0 ? 'pie' : 'bar')
);

    const getQuestionData = (questionIndex) => {
        const dataMap = {};
        survey.json.forEach(response => {
            const answers = response[`Q${questionIndex + 1}`].split(';');
            answers.forEach(answer => {
                const trimmedAnswer = answer.trim();
                if (!dataMap[trimmedAnswer]) {
                    dataMap[trimmedAnswer] = 0;
                }
                dataMap[trimmedAnswer] += 1;
            });
        });
        return Object.keys(dataMap).map(key => ({ name: key, value: dataMap[key] }));
    };

    const renderChart = (data, chartType) => {
        if (data.length > 5) {
            return null; // Return null if more than 5 distinct responses
        }

        if (chartType === 'pie') {
            return (
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, idx) => (
                            <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            );
        } else if (chartType === 'bar') {
            return (
                <BarChart width={400} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8">
                        {data.map((entry, idx) => (
                            <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            );
        } else if (chartType === 'treemap') {
            return (
                <Treemap
                    width={450}
                    height={400}
                    data={data}
                    dataKey="value"
                    stroke="#fff"
                    fill="#8884d8"
                >
                    <Tooltip />
                </Treemap>
            );
        }
    };

    const handleChartTypeChange = (index, newType) => {
        const newChartTypes = [...chartTypes];
        newChartTypes[index] = newType;
        setChartTypes(newChartTypes);
    };

    return (
        <div className="col-sm-9 content">
            <div className="dashhead-titles">
                <h6 className="dashhead-subtitle">Surveys</h6>
                <h2 className="dashhead-title">Survey Responses</h2>
            </div>
            <div className="survey-results-container">
                <div className="survey-name">{survey.title}</div>
                <div style={{ marginBottom: "12px" }}>Survey Description: {survey.description}</div>
                <h3 className="UGH">CSV</h3>
                <textarea className="form-control">{survey.csv}</textarea>
                <h3 className="UGH2">JSON</h3>
                <textarea className="form-control">{JSON.stringify(survey.json, null, 2)}</textarea>
                {survey.questions.map((question, index) => {
                    const data = getQuestionData(index);
                    const hasChart = data.length <= 5;

                    return (
                        <div className="survey-question" key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px', padding: 'none !important' }}>
                            <div style={{ flex: 2, padding: 'none !important', marginRight: '-20px' }}>
                                <div className="survey-question-text">{question}</div>
                                <ol className="survey-ol">
                                    {survey.json.map((response, responseIndex) => (
                                        <li key={responseIndex}>{response[`Q${index + 1}`]}</li>
                                    ))}
                                </ol>
                            </div>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {hasChart && (
                                    <div align={'left'} style={{fontSize: '12px', margin: '10px 30px 0 0'}}>
                                        <label htmlFor={`chartType-${index}`}>Select Chart Type: </label>
                                        <select id={`chartType-${index}`} value={chartTypes[index]} onChange={e => handleChartTypeChange(index, e.target.value)}  style={{fontSize: '12px'}}>
                                            <option value="pie" style={{fontSize: '12px'}}>Pie Chart</option>
                                            <option value="bar" style={{fontSize: '12px'}}>Bar Chart</option>
                                            <option value="treemap" style={{fontSize: '12px'}}>Treemap</option>
                                        </select>
                                    </div>
                                )}
                                {renderChart(data, chartTypes[index])}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SurveyResults;
