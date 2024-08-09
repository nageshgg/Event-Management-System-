CREATE TABLE FeedbackQuestions (
    question_id INT PRIMARY KEY,
    question_text TEXT NOT NULL,
    event_id INT,
    FOREIGN KEY (event_id) REFERENCES EventInformation(event_id)
);
 


