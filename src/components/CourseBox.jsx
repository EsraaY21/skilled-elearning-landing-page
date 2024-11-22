import React from "react";

export default function CourseBox({ title, description, icon }) {
  return (
    <div className="course_box">
      <div className="content">
        <img src={icon} alt={`${title} icon`} className="box_icon" />
        <h3 className="text-4">{title}</h3>
        <p className="text-5">{description}</p>
      </div>
      <a className="text-7">Get Started</a>
    </div>
  );
}
