import React from "react";

export default function CourseBox({ title, description }) {
  return (
    <div className="course_box">
      <div className="content">
        <h3 className="text-4">{title}</h3>
        <p className="text-5">{description}</p>
      </div>
      <a className="text-7">Get Started</a>
    </div>
  );
}
