import styles from "./Courses.module.css";
import Link from "next/link";

const Courses = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
  );
  const courses = await res.json();

  return (
    <div className={styles.coursesContainer}>
      <h1>Courses</h1>

      <ul>
        {courses.map((course) => (
          <li key={course.id} style={{ marginBottom: "10px" }}>
            <Link href={`/courses/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
