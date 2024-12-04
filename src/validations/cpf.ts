const validateDigit = (arr: number[], position: number): boolean => {
  let factor: number;
  let arrayDigit: number;
  let sum = 0;

  if (position === 1) {
    factor = 10;
    arrayDigit = 9;
  } else {
    factor = 11;
    arrayDigit = 10;
  }

  for (let i = 0; i < arrayDigit; i += 1) {
    sum += (arr[i] - 48) * factor;
    factor -= 1;
  }

  const division = Math.floor(sum % 11);
  let verifyingDigit = 0;

  if (division > 1) {
    verifyingDigit = 11 - division;
  }

  if (arr[arrayDigit] !== verifyingDigit) {
    return false;
  }

  return true;
};

const validateCNPJ = (cnpj: unknown): boolean => {
  if (typeof cnpj !== 'string' && typeof cnpj !== 'number') {
    return false;
  }

  let filteredCNPJ = String(cnpj);
  filteredCNPJ = filteredCNPJ.replace(/\W/g, '');
  filteredCNPJ = filteredCNPJ.toUpperCase();

  if (filteredCNPJ.length !== 14) {
    return false;
  }

  const arrCNPJ: number[] = Array.from(filteredCNPJ, (char) => (char.charCodeAt(0) - 48));

  const firstDigit = validateDigit(arrCNPJ, 1);
  const secondDigit = validateDigit(arrCNPJ, 2);
  if (!firstDigit || !secondDigit) {
    return false;
  }

  return true;
};

export default validateCNPJ;