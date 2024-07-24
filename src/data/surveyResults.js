// src/data/surveyResults.js
export const surveyResults = [
    {
        id: 2,
        title: 'Redefining Survey Results: Your Feedback Matters!',
        description: 'Have you ever made a survey on this platform, looked at the results, and thought: "Why would they design the page like this? I wish someone would redesign the GaTech survey results page." That\'s what we are here to solve. Help us enhance survey results on peersurvey.cc.gatech.edu! Your feedback will improve data visualization and usability with the very same platform you take this survey in! Share your insights and shape the future',
        responses: 36,
        csv: 'response,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,Q11,Q12,Q13\n1,ability to host media and randomize question order,Daily,GaTech Peersurvey;Google Forms;SurveyMonkey,Easy,Slightly Important,Helpful,Moderately Important,Yes,Satisfied,Slightly Beneficial,Never,Yes\n2,flexibility,Rarely,GaTech Peersurvey;Google Forms,Easy,Not Important,Slightly Helpful,Not Important,Yes,Very Satisfied,Not Beneficial,Sometimes,No\n...',
        json: [
            {
                "response": 1,
                "Q1": "ability to host media and randomize question order",
                "Q2": "Daily",
                "Q3": "GaTech Peersurvey;Google Forms;SurveyMonkey",
                "Q4": "Easy",
                "Q5": "Slightly Important",
                "Q6": "Helpful",
                "Q7": "Moderately Important",
                "Q8": "Yes",
                "Q9": "Satisfied",
                "Q10": "Slightly Beneficial",
                "Q11": "Never",
                "Q12": "Yes"
            },
            {
                "response": 2,
                "Q1": "flexibility",
                "Q2": "Rarely",
                "Q3": "GaTech Peersurvey;Google Forms",
                "Q4": "Easy",
                "Q5": "Not Important",
                "Q6": "Slightly Helpful",
                "Q7": "Not Important",
                "Q8": "Yes",
                "Q9": "Very Satisfied",
                "Q10": "Not Beneficial",
                "Q11": "Sometimes",
                "Q12": "No"
            },
            //... More responses
        ],
        questions: [
            "Describe what features you would find most useful when analyzing survey results and why.",
            "How often do you use survey tools?",
            "Which survey tools have you used before?",
            "How would you rate the ease of use of peersurvey.cc.gatech.edu results page?",
            "How important is the ability to export survey results to Excel for you?",
            "How helpful would you find inline charts for visualizing survey results?",
            "Rate the importance of having generative AI analysis for survey results.",
            "Do you use any analytics tools to interpret survey results?",
            "How satisfied are you with the current layout of questions and responses in peersurvey.cc.gatech.edu results screen?",
            "How beneficial is it to see a timeline of when survey responses came in?",
            "How often do you need to compare statistics side-by-side in survey results?",
            "Would you use an import feature to integrate results from a third party survey site like SurveyMonkey into peersurvey.cc.gatech.edu?",
        ]
    },
    {
        id: 3,
        title: 'First Survey Title',
        description: 'Description of the first survey.',
        responses: 25,
        csv: 'response,Q1,Q2,Q3\n1,answer1,answer2,answer3\n...',
        json: [
            {"response": 1, "Q1": "answer1", "Q2": "answer2", "Q3": "answer3"},
            //... More responses
        ],
        questions: [
            "Question 1?",
            "Question 2?",
            "Question 3?"
        ]
    },
];
