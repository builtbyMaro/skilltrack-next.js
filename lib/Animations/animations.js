export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const stepVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100, // Enter from right if next, left if back
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100, // Exit left if next, right if back
    opacity: 0,
  }),
  transition: {
    duration: 0.35,
    ease: "easeInOut",
  },
};
