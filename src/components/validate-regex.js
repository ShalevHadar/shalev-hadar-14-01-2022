export const validate = (text) => {
  let reg = /^[a-zA-Z.,()-\s]*$/;
  return reg.test(text);
};
