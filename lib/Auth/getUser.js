export const getUser = () => {
  if (typeof window === "undefined") return null;

  const user = localStorage.getItem("loggedInUser");
  return user ? JSON.parse(user) : null;
};
