import styles from "../Courses.module.css";

export const generateStaticParams = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
  );
  const courses = await res.json();
  return courses.map((course) => ({
    courseId: course.id.toString(),
  }));
};

const CoursePage = async ({ params }) => {
  const { courseId } = await params;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + courseId,
  );
  const course = await res.json();
  console.log("Course data:", course);

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div className={styles.coursesContainer}>
      <h1>{course.title}</h1>
      <p>{course.body}</p>
      <p>
        <strong>Course ID:</strong> {courseId}
      </p>
    </div>
  );
};

export default CoursePage;
