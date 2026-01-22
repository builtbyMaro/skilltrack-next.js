export const saveNewUser = (users, userData) => {
  const { confirmPassword, ...userToSave } = userData;

  const updatedUsers = [...users, userToSave];
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  return updatedUsers;
};
