"use client";

import Link from "next/link";

export default function ({ close = () => {}, eventID }) {
  const query = { eventId: eventID };
  const href = {
    pathname: "/feedbackform",
    query,
  };
  return (
    
    <div>
      <Link href={href}>
        http://localhost:3000/feedbackform?eventId=1
      </Link>
    </div>
  );
}
