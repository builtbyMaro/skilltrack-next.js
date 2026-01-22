"use client";
import { useState } from "react";
import styles from "./Faq.module.css";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/Animations/animations";

const Faq = () => {
  const faq = [
    {
      Question: "Is the content relevant to my profession?",
      Answer:
        "Yes! We curate lessons specifically for finance, business, and accounting professionals with regular updates.",
    },
    {
      Question: "Will my development hours be recognized by my association?",
      Answer:
        "Our verified tracking is designed to meet CPD/PD requirements for most professional bodies.",
    },
    {
      Question: "What if I’m short on time?",
      Answer:
        "No worries, our audio lessons make learning flexible and mobile-friendly.",
    },
    {
      Question: "Can I cancel anytime?",
      Answer:
        "Absolutely. You can pause or cancel your subscription at any time from your dashboard.",
    },
    {
      Question: "How is this different from other learning platforms?",
      Answer:
        "We focus on verified, industry specific learning not generic video courses, so every minute you invest actually counts.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const accordionOpen = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      className={styles.faqContainer}
      id="Faq"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={fadeUp}>
        Frequently
        <br />
        Asked Questions
      </motion.h2>
      <motion.div className={styles.faqItems} variants={fadeUp}>
        {faq.map((item, index) => (
          <div
            onClick={() => accordionOpen(index)}
            key={index}
            className={
              openIndex === index
                ? `${styles.accordionItem} ${styles.accordionActive}`
                : styles.accordionItem
            }
          >
            <div className={styles.accordionQuestion}>
              <h3>{item.Question}</h3>
              <i
                className={
                  openIndex === index
                    ? "bx  bx-chevron-up"
                    : "bx  bx-chevron-down"
                }
              ></i>
            </div>
            <p
              className={
                openIndex === index
                  ? `${styles.accordionAnswer} ${styles.accordionAnswerOpen} `
                  : styles.accordionAnswer
              }
            >
              {item.Answer}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Faq;
