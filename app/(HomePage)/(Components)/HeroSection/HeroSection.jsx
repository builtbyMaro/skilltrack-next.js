import Button from "../Button.jsx";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/Animations/animations.js";

const Hero = () => {
  return (
    <motion.section
      id="Home"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.heroContainer}>
        <div className={styles.heroMain}>
          <div className={styles.heroText}>
            <h1>
              The Verified <span>Skill Development Platform</span> for Modern
              Professionals
            </h1>
            <h2>
              Automatically record your learning hours while gaining insights
              from expertly curated content built{" "}
              <span>for finance, business, and leadership growth</span>.
            </h2>
            <div className={styles.heroButtons}>
              <Button text="Try 3 Lessons - Free" className={styles.button} />
              <div>
                <img src="/marina.jpg" alt="Marina" />
                <img src="/willians.jpg" alt="willians" />
                <img src="/jamesoconor.jpg" alt="James" />
                <img src="/aishamalik.jpg" alt="Aisha" />
                <img src="/DanielReed.jpg" alt="Daniel" />
                <h3>Trusted by professionals across industries.</h3>
              </div>
            </div>
          </div>
          <div className={styles.heroImgWrapper}>
            <img src="/cta.png" alt="" className={styles.heroImg1} />
            <img src="/eycard.png" alt="" className={styles.heroImg2} />
          </div>
        </div>
        <div className={styles.trust}>
          <h2>Trusted by industry experts</h2>
          <p>
            Our platform is recognized by leading professional bodies and
            trusted by teams across Australia and beyond.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
