export const userExists = (users, email) => {
  return users.some((u) => u.email.toLowerCase() === email.toLowerCase());
};
