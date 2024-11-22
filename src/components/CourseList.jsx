import CourseBox from "./CourseBox";
import AnimationIcon from "../assets/icon-animation.svg";
import DesignIcon from "../assets/icon-design.svg";
import PhotographyIcon from "../assets/icon-photography.svg";
import CryptoIcon from "../assets/icon-crypto.svg";
import BusinessIcon from "../assets/icon-business.svg";

export default function CourseList() {
  const courses = [
    {
      title: "Animation",
      description:
        "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
      icon: AnimationIcon,
    },
    {
      title: "Design",
      description:
        "Create beautiful, usable interfaces to help shape the future of how the web looks.",
      icon: DesignIcon,
    },
    {
      title: "Photography",
      description:
        "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
      icon: PhotographyIcon,
    },
    {
      title: "Crypto",
      description:
        "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54-hour course.",
      icon: CryptoIcon,
    },
    {
      title: "Business",
      description:
        "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
      icon: BusinessIcon,
    },
  ];

  return (
    <section className="section courses_section gradient-3">
      <div className="container">
        <div className="courses_grid">
          <div className="course_box gradient-1 text-3">
            <h2>Check out our most popular courses!</h2>
          </div>
          {courses.map((course, index) => (
            <CourseBox
              key={index}
              title={course.title}
              description={course.description}
              icon={course.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
