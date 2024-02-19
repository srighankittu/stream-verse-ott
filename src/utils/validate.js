export const validate = (name, email, password, isSignIn) => {
  if (!isSignIn) {
    const isValidName = /^[A-Za-z]+ [A-Za-z]+$/.test(name);
    const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      );
    if (!isValidName) {
      return "Invalid Name!!";
    }
    if (!isValidEmail) {
      return "Invalid Email!!";
    }
    if (!isValidPassword) {
      return "Invalid Password!!";
    }
    return "";
  } else if (isSignIn) {
    const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      );
    if (!isValidEmail) {
      return "Invalid Email!!";
    }
    if (!isValidPassword) {
      return "Invalid Password!!";
    }
    return "";
  }
};
