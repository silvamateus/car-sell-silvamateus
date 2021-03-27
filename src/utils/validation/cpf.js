export const CPFValidation = (cpf) => {
  let sum;
  let mod;
  // validate 1st digit
  sum = 0;
  if (
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  ) {
    return false;
  }
  for (let i = 0; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i); // sums all numbers untill 9th digit
  }
  mod = (sum * 10) % 11;
  if (mod === 10 || mod === 11) {
    mod = 0;
  }
  if (mod !== parseInt(cpf.substring(9, 10))) {
    return false;
  }
  // validate 2nd digit
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i); // sums all numbers untill 10th digit
  }
  mod = (sum * 10) % 11;

  if (mod == 10 || mod == 11) {
    mod = 0;
  }
  if (mod != parseInt(cpf.substring(10, 11))) {
    return false;
  }
  return true;
};