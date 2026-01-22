"use client";
import Button from "../Button.jsx";
import Testimonials from "./Testimonials.jsx";
import styles from "./Pricing.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/Animations/animations.js";

const Pricing = () => {
  const [billingType, setBillingType] = useState("monthly");
  const Monthly = () => {
    setBillingType("monthly");
  };
  const Yearly = () => {
    setBillingType("yearly");
  };

  return (
    <motion.section
      className={styles.pricingSection}
      id="Pricing"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.pricing}>
        <motion.h2 variants={fadeUp}>
          Simple, transparent pricing everything included.
        </motion.h2>
        <motion.div className={styles.priceCard} variants={fadeUp}>
          <motion.div className={styles.billingTime} variants={fadeUp}>
            <h3
              className={
                billingType === "monthly"
                  ? `${styles.billing} ${styles.billingActive}`
                  : styles.billing
              }
              onClick={Monthly}
            >
              Monthly
            </h3>
            <h3
              className={
                billingType === "yearly"
                  ? `${styles.billing} ${styles.billingActive}`
                  : styles.billing
              }
              onClick={Yearly}
            >
              Yearly
            </h3>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h2>
              {billingType === "monthly" ? "$19" : "$156"}
              <span>{billingType === "monthly" ? "/month" : "/year"}</span>
            </h2>
            <p>
              {billingType === "monthly"
                ? "Per user, billed Monthly"
                : "per user, billed Yearly ($13/month Save 31%)"}
            </p>
          </motion.div>
          <motion.div className={styles.benefit}>
            <i className="bx  bxs-badge-check"></i>
            <h3>All courses and updates</h3>
          </motion.div>
          <motion.div className={styles.benefit}>
            <i className="bx  bxs-badge-check"></i>
            <h3>New content added weekly</h3>
          </motion.div>
          <motion.div className={styles.benefit}>
            <i className="bx  bxs-badge-check"></i>
            <h3>Verified tracking and certification</h3>
          </motion.div>
          <motion.div className={styles.benefit}>
            <i className="bx  bxs-badge-check"></i>
            <h3>Personal and team dashboards</h3>
          </motion.div>
          <Button text="Get Started" className={styles.button} />
        </motion.div>
      </div>
      <Testimonials />
    </motion.section>
  );
};

export default Pricing;
