const loginUser = (users, loginData) => {
  const { email, password } = loginData;
  const normalizedEmail = email.trim().toLowerCase();

  const user = users.find((u) => u.email.toLowerCase() === normalizedEmail);

  if (!user) {
    return {
      success: false,
      field: "email",
      message: "No account found with this email",
    };
  }

  if (user.password !== password) {
    return { success: false, field: "password", message: "Incorrect password" };
  }

  return { success: true, user };
};

export default loginUser;
