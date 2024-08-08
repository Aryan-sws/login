export const loginValidations = (formData) => {
  let error = {};
  if (!formData.username) {
    error.username = "Username is required";
  }
  if (!formData.password) {
    error.password = "Password is required";
  }
  return error;
};
