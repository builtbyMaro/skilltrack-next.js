"use client";
import { useState } from "react";
import styles from "./MyCourses.module.css"

const MyCourses = ({ userCourses, viewCertificate }) => {

  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredCourses = userCourses.filter(
    course => course.title.toLowerCase().includes(search.toLowerCase())
  )

  const inProgressCourses = filteredCourses.filter(
    course => course.status === 'In Progress'
  )

  const completedCourses = filteredCourses.filter(
    course => course.status === 'Completed'
  )



  return (
    <div className={styles.myCourseContainer}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInputs}>
          <input type="text" placeholder="Search courses" onChange={handleSearch} className={styles.searchInput}/>
          <i className='bx  bx-search'></i>
        </div>
      </div>
      <div className={styles.courses}>
          <div className={styles.coursesInProgress}>
            <div className={styles.headers}>
              <h2>Courses in Progress</h2>
            </div>
            <div className={styles.courseCards}>
              {inProgressCourses.length === 0 ? (<p className={styles.noCourses}>No courses match your search.</p>) : 
              (
                inProgressCourses.map((course) => (
                  <div key={course.id} className={styles.courseCard}>
                    <div className={styles.courseDetails}>
                      <img src="/card6.jpg" alt={course.title} className={styles.courseImage} />
                      <div className={styles.courseText}>
                        <div className={`${styles[`category-${course.category}`]} ${styles.courseCategory}`}>
                          <h4>{course.category}</h4>
                        </div>
                        <h3 className={styles.courseTitle}>{course.title}</h3>
                        <p className={styles.courseDescription}>{course.description}</p>
                        <p className={styles.courseLessons}> <span>completed {course.completedLessons}</span>/{course.totalLessons} Lessons</p>
                      </div>
                    </div>
                    <div className={styles.courseActions}>
                      <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{width: `${(course.completedLessons / course.totalLessons) * 100}%`}}></div>
                    </div>
                      <button className={styles.resumeButton}>Resume</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className={styles.completedCourses}>
            <div className={styles.headers}>
              <h2>Completed Courses</h2>
            </div>
            <div className={styles.courseCards}>
              {completedCourses.length === 0 ? (<p className={styles.noCourses}>No courses match your search.</p>) : (
                completedCourses.map((course) => (
                  <div key={course.id} className={styles.courseCard}>
                    <div className={styles.courseDetails}>
                      <img src="/card6.jpg" alt={course.title} className={styles.courseImage} />
                      <div className={styles.courseText}>
                        <div className={`${styles[`category-${course.category}`]} ${styles.courseCategory}`}>
                          <h4>{course.category}</h4>
                        </div>
                        <h3 className={styles.courseTitle}>{course.title}</h3>
                        <p className={styles.courseDescription}>{course.description}</p>
                        <p className={styles.courseLessons}>{course.status}</p>
                        <button className={styles.certificateButton} onClick={viewCertificate}>View Certificate</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
      </div>
    </div>
  )
}

export default MyCourses;