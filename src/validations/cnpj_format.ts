import validateCNPJ from './cnpj';

export default function CNPJformat(cnpj: unknown): boolean {
  if (typeof cnpj !== 'string') {
    return false;
  }

  const cleanedCnpj = cnpj.replace(/\W/g, '').toUpperCase();

  if (cleanedCnpj.length !== 14) return false;
  if (cleanedCnpj[2] !== '.') return false;
  if (cleanedCnpj[6] !== '.') return false;
  if (cleanedCnpj[10] !== '/') return false;
  if (cleanedCnpj[15] !== '-') return false;

  return validateCNPJ(cleanedCnpj);
}