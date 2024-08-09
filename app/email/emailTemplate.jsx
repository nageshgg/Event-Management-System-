import React from 'react';

const FeedbackEmail = ({ user, event }) => {
  const feedbackFormLink = "link here";

  return (
    <div>
      <p>Dear {user.firstName},</p>
      <p>Thank you for attending our event "{event.name}". We hope you had a great time and gained valuable insights!</p>
      <p>We would greatly appreciate it if you could provide us with your feedback on the event. Your input is crucial for us to improve future events.</p>
      <p>Please click the following link to access the feedback form:</p>
      <a href={feedbackFormLink}>Event Feedback Form</a>
      <p>We look forward to hearing from you!</p>
      <p>Best regards,</p>
      <p>Your Event Team</p>
    </div>
  );
}

export default FeedbackEmail;
