import React from "react";
import CourseBox from "./CourseBox";

export default function CourseList() {
  const courses = [
    {
      title: "Animation",
      description:
        "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    },
    {
      title: "Design",
      description:
        "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    },
    {
      title: "Photography",
      description:
        "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    },
    {
      title: "Crypto",
      description:
        "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54-hour course.",
    },
    {
      title: "Business",
      description:
        "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    },
  ];

  return (
    <section className="section courses_section">
      <div className="container">
        <div className="courses_grid">
          {courses.map((course, index) => (
            <CourseBox
              key={index}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
