import validator from "validator";
export const validateEmail = (email, res) => {
  if (!validator.isEmail(email)) {
    throw Error("your email must look like  this ex:archimydes@gmail.com");
  }
};
