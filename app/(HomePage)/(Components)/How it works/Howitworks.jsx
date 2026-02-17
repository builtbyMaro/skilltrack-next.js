"use client";
import styles from "./Howitworks.module.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/Animations/animations";

const HowItWorks = () => {
  const howItWorks = [
    {
      Heading: "Explore the library",
      Body: "Access our growing collection of business and finance audio lessons powered by insights from world-class publishers like Deloitte, CPA Australia, and Harvard Business Review.",
    },
    {
      Heading: "Learn on the go",
      Body: "learning experiences that cover every major professional competency.",
    },
    {
      Heading: "Verify your progress",
      Body: "Complete short, interactive quizzes to confirm your understanding and earn verified learning credits.",
    },
    {
      Heading: "Receive your certificate",
      Body: "Generate and download verified completion certificates recognized by top professional associations.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const [direction, setDirection] = useState("next");

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) =>
        prev === howItWorks.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
  };

  const resetAutoScroll = () => {
    clearInterval(intervalRef.current);
    startAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev === 0 ? howItWorks.length - 1 : prev - 1));
    resetAutoScroll();
  };
  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev === howItWorks.length - 1 ? 0 : prev + 1));
    resetAutoScroll();
  };

  const { Heading, Body } = howItWorks[currentIndex];

  return (
    <motion.section
      className={styles.hiwContainer}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.carousel}>
        <div className={styles.control}>
          <i className="bx bx-chevron-left" onClick={prevSlide}></i>
        </div>
        <div className={styles.content}>
          <div
            className={`${styles.slide} ${
              direction === "next" ? styles.slideNext : styles.slidePrev
            }`}
            key={currentIndex}
          >
            <h3 className={styles.heading}>{Heading}</h3>
            <p className={styles.body}>{Body}</p>
          </div>
          <div className={styles.dots}>
            {howItWorks.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.activeDot : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className={styles.control}>
          <i className="bx bx-chevron-right" onClick={nextSlide}></i>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
