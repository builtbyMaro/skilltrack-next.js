import styles from './overview.module.css';
import Link from 'next/link';

const Overview = ( {userCourses, recommendedCourses, handleSeeAll}) => {

  const inProgressCourses = userCourses.filter( course => course.status === 'In Progress')

  return (
    <div className={styles.overviewContainer}>
      <div className={styles.overviewCourses}>
        <div className={styles.mainHeader}>
          <h3 className={styles.mainHeaderText}>Let's keep your learning journey going</h3>
        </div>
        <div className={styles.coursesInProgress}>
          <div className={styles.headers}>
            <h3>Continue learning</h3>
            <p onClick={handleSeeAll}>See all</p>
          </div>
          <div className={styles.coursesList}>
            {inProgressCourses.slice(0, 1).map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <img src="/card6.jpg" alt={course.title} className={styles.courseImage} />
                <div className={styles.courseDetails}>
                  <div className={`${styles[`category-${course.category}`]} ${styles.courseCategory}`}>
                    <h4>{course.category}</h4>
                  </div>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <p className={styles.courseLessons}> <span>completed {course.completedLessons}</span>/{course.totalLessons} Lessons</p>
                  <div className={styles.actions}>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{width: `${(course.completedLessons / course.totalLessons) * 100}%`}}></div>
                    </div>
                    <button className={styles.resumeButton}>Resume</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.recommendedCourses}>
          <div className={styles.headers}>
            <h3>For you</h3>
            <Link href="/Courses"><p>See more</p></Link>
          </div>
          <div className={styles.coursesList}>
              {recommendedCourses.map((course) => (
                <div key={course.id} className={styles.courseCard}>
                  <img src="/card6.jpg" alt={course.title} className={styles.courseImage} />
                  <div className={styles.courseDetails}>
                    <div className={`${styles[`category-${course.category}`]} ${styles.courseCategory}`}>
                      <h4>{course.category}</h4>
                    </div>
                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    <p className={styles.courseLessons}><span>{course.totalLessons} Lessons</span></p>
                    <button className={styles.enrollButton}>Enroll Now</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.overviewStats}>
        <h3 className={styles.statsHeader}>Recent activity <span>(Last 30days)</span></h3>
          <div className={styles.statCard1}>
              <i className='bx  bxs-flame'></i>
              <p className={styles.statDetails}>Streak(days)</p>
              <h3 className={styles.statNumber}>5</h3>
          </div>
          <div className={styles.statCard2}>
              <i className='bx  bxs-stopwatch'></i>
              <p className={styles.statDetails}>Hours Learned</p>
              <h3 className={styles.statNumber}>16.3</h3>
          </div>
          <div className={styles.statCard3}>
              <i className='bx  bxs-badge'></i>
              <p className={styles.statDetails}>Courses Completed</p>
              <h3 className={styles.statNumber}>2</h3>
          </div>
          <div className={styles.statCard4}>
            <i className='bx  bxs-badge'></i>
            <p className={styles.statDetails}>Certificates Earned</p>
            <h3 className={styles.statNumber}>2</h3>
          </div>
      </div>
    </div>
  )
}

export default Overview;
