import validateCPF from './cpf';

export default function CPFformat(cpf: unknown): boolean {
  if (typeof cpf !== 'string') {
    return false;
  }

  if (cpf.length !== 14) return false;
  if (cpf[3] !== '.') return false;
  if (cpf[7] !== '.') return false;
  if (cpf[11] !== '-') return false;

  return validateCPF(cpf);
}