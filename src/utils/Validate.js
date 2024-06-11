export const Validate = (email, password, name) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isValidfullName = /([a-zA-Z0-9_\s]+)/.test(name);

  if (!isValidfullName) return "Enter the Full Name correctly";
  if (!isValidEmail) return "Email Id is not valid";
  if (!isValidPassword) return "Password is not valid";

  return null;
};
