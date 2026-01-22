export const resetUserPassword = (users, email, newPassword) => {
  const updatedUsers = users.map((user) => {
    if (user.email.toLowerCase() === email.toLowerCase()) {
      return { ...user, password: newPassword };
    }
    return user;
  });

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  return { success: true, updatedUsers };
};
