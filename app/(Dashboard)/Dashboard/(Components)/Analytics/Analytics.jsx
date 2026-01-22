"use client";
import styles from './Analytics.module.css';
import BarChart from '../Chart/Chart';
import { useState }  from 'react';

const Analytics = ({ lessonsData, timeData, activeDaysData }) => {

  const lessonChartRange = [ "30+", "25", "20", "15", "10", "5", "0"];
  const timeChartRange = [ "240+", "180", "120", "60", "0"];
  const activeDaysChartRange = [ "7", "5", "3", "1", "0"];

  const [lessonsDataMonth, setLessonsDataMonth] = useState("january");
  const [timeDataMonth, setTimeDataMonth] = useState("january");
  const [activeDaysDataMonth, setActiveDaysDataMonth] = useState("january");

  const handleLessonsMonthChange = (e) => {
    setLessonsDataMonth(e.target.value);
  }

  const handleTimeMonthChange = (e) => {
    setTimeDataMonth(e.target.value);
  }

  const handleActiveDaysMonthChange = (e) => {
    setActiveDaysDataMonth(e.target.value);
  }


  return (
    <div className={styles.analyticsContainer}>
      <div className={styles.welcomeMessage }>
        <h2>Hey, Princewill</h2>
        <p>Here's your progress on Skilltrack so far</p>
      </div>
      <div className={styles.analyticsGrid}>
        <div className={styles.analyticsCard}>
          <div className={styles.cardHeader}>
            <p>You're currently learning</p>
          </div>
          <div>
            <h3>4 Courses</h3>
            <p className={styles.recentAnalysis}>40% Completed</p>
          </div>
        </div>
        <div className={styles.analyticsCard}>
          <div className={styles.cardHeader}>
            <p>You've completed</p>
          </div>
          <div>
            <h3>10 courses</h3>
            <p className={styles.recentAnalysis}>+2 in the last 7 days</p>
          </div>
        </div>
        <div className={styles.analyticsCard}>
          <div className={styles.cardHeader}>
            <p>you've spent</p>
          </div>
          <div>
            <h3>48.6 hours</h3>
            <p className={styles.recentAnalysis}>+3 in the last 7 days</p>
          </div>
        </div>
        <div className={styles.analyticsCard}>
          <div className={styles.cardHeader}>
            <p>you're currently on a</p>
          </div>
          <div>
            <h3>5 day streak</h3>
            <p className={styles.recentAnalysis}>Your highest so far</p>
          </div>
        </div>
      </div>
      <div className={styles.chartsSection}>
        <div>

        </div>
        <div className={styles.chartsContainer}>
          <div className={styles.chartContainer}>
            <div className={styles.chartHeader}>
              <h3>Lessons completed</h3>
              <select name="" id="" value={lessonsDataMonth} className={styles.chartRanges} onChange={handleLessonsMonthChange}>
                <option value="january">January</option>
                <option value="december">December</option>
                <option value="november">November</option>
                <option value="october">October</option>
              </select>
            </div>
          <BarChart data={lessonsData[lessonsDataMonth]} maxValue={30} range={lessonChartRange} rangeValue="lessons" />
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.chartHeader}>
              <h3>Time Spent</h3>
              <select name="" id="" value={timeDataMonth} className={styles.chartRanges} onChange={handleTimeMonthChange}>
                <option value="january">January</option>
                <option value="december">December</option>
                <option value="november">November</option>
                <option value="october">October</option>
              </select>
            </div>
          <BarChart data={timeData[timeDataMonth]} maxValue={240} range={timeChartRange} rangeValue="mins"/>
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.chartHeader}>
              <h3>Active Days</h3>
              <select name="" id="" value={activeDaysDataMonth} className={styles.chartRanges} onChange={handleActiveDaysMonthChange}>
                <option value="january">January</option>
                <option value="december">December</option>
                <option value="november">November</option>
                <option value="october">October</option>
              </select>
            </div>
          <BarChart data={activeDaysData[activeDaysDataMonth]} maxValue={7} range={activeDaysChartRange} rangeValue="days"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics;
