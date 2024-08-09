import React from 'react';
const FeedbackEmail = ({
  user,
  event
}) => {
  const feedbackFormLink = "link here";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Dear ", user.firstName, ","), /*#__PURE__*/React.createElement("p", null, "Thank you for attending our event \"", event.name, "\". We hope you had a great time and gained valuable insights!"), /*#__PURE__*/React.createElement("p", null, "We would greatly appreciate it if you could provide us with your feedback on the event. Your input is crucial for us to improve future events."), /*#__PURE__*/React.createElement("p", null, "Please click the following link to access the feedback form:"), /*#__PURE__*/React.createElement("a", {
    href: feedbackFormLink
  }, "Event Feedback Form"), /*#__PURE__*/React.createElement("p", null, "We look forward to hearing from you!"), /*#__PURE__*/React.createElement("p", null, "Best regards,"), /*#__PURE__*/React.createElement("p", null, "Your Event Team"));
};
export default FeedbackEmail;
