const validateInputs = (data) => {
  const errors = {};

  const passwordPattern = /^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;
  const strongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;

  const emojiPattern =
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/;

  if ("firstName" in data) {
    if (!data.firstName.trim()) {
      errors.firstName = "*first name is required";
    } else if (/\s/.test(data.firstName)) {
      errors.firstName = "*first name cannot contain spaces";
    } else if (data.firstName.length > 20) {
      errors.firstName = "*first name cannot exceed 20 characters";
    } else if (emojiPattern.test(data.firstName)) {
      errors.firstName = "*first name cannot contain emojis";
    }
  }

  if ("lastName" in data) {
    if (!data.lastName.trim()) {
      errors.lastName = "*last name is required";
    } else if (/\s/.test(data.lastName)) {
      errors.lastName = "*last name cannot contain spaces";
    } else if (data.lastName.length > 20) {
      errors.lastName = "*last name cannot exceed 20 characters";
    } else if (emojiPattern.test(data.lastName)) {
      errors.lastName = "*last name cannot contain emojis";
    }
  }

  if ("email" in data) {
    const emailNormalized = data.email.trim().toLowerCase();
    if (!emailNormalized) {
      errors.email = "*email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailNormalized)) {
      errors.email = "*email is invalid";
    } else if (/\s/.test(emailNormalized)) {
      errors.email = "*email cannot contain spaces";
    } else if (emailNormalized.length > 50) {
      errors.email = "*email cannot exceed 50 characters";
    } else if (emojiPattern.test(emailNormalized)) {
      errors.email = "*email cannot contain emojis";
    }
    data.email = emailNormalized;
  }

  if ("password" in data) {
    if (!data.password.trim()) {
      errors.password = "*password is required";
    } else if (/\s/.test(data.password)) {
      errors.password = "*password cannot contain spaces";
    } else if (data.password.length < 6) {
      errors.password = "*password must be at least 6 characters";
    } else if (data.password.length > 32) {
      errors.password = "*password cannot exceed 32 characters";
    } else if (!passwordPattern.test(data.password)) {
      errors.password = "*password contains invalid characters";
    } else if (!strongPassword.test(data.password)) {
      errors.password =
        "*password must include uppercase, lowercase, number, and special character";
    } else if (emojiPattern.test(data.password)) {
      errors.password = "*password cannot contain emojis";
    }
  }

  if ("confirmPassword" in data) {
    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = "*please confirm your password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "*passwords do not match";
    } else if (emojiPattern.test(data.confirmPassword)) {
      errors.confirmPassword = "*confirm password cannot contain emojis";
    }
  }

  return errors;
};

export default validateInputs;
