export const validate = (text) => {
  let reg = /^\w+[a-zA-Z_ ]*$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};
