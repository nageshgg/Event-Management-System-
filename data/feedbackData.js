export const FeedbackFormate = {
  questionId: "",
  question: "hi there weq",
  type: "",
  options: [""],
  required: false,
  answer: "",
  eventID: "",
};

export const feedbackQuestions = [
  {
    questionId: "0",
    question: "How would you rate your overall satisfaction with the event?",
    type: "checkbox",
    options: ["Poor", "Good", "Excellent"],
    answer: "",
    required: false,
  },
  {
    questionId: "1",
    question: "How satisfied were you with the event's venue ?",
    type: "radio",
    options: ["1", "2", "3", "4", "5"],
    answer: "",
    required: false,
  },
  {
    questionId: "2",
    question: "Comments ?",
    type: "text",
    options: [],
    answer: "",
    required: false,
  },
];
