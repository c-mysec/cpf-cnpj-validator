import validateCNPJ from './cnpj';

export default function CNPJformat(cnpj: unknown): boolean {
  const cleanedCNPJ = (cnpj as string).toUpperCase().replace(/\W/g, '');
  if (cleanedCNPJ.length !== 14) return false;
  if (cleanedCNPJ[2] !== '.') return false;
  if (cleanedCNPJ[6] !== '.') return false;
  if (cleanedCNPJ[10] !== '/') return false;
  if (cleanedCNPJ[15] !== '-') return false;

  return validateCNPJ(cleanedCNPJ);
}