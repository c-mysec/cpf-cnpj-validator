import validateCPF from './validations/cpf';
import validateCNPJ from './validations/cnpj';
import CPFformat from './validations/cpf_format';
import CNPJformat from './validations/cnpj_format';

export default class Validator {
  public static isCPF(cpf: unknown): boolean {
    return validateCPF(cpf);
  }

  public static isFormattedCPF(cpf: unknown): boolean {
    return CPFformat(cpf);
  }

  public static isCNPJ(cnpj: unknown): boolean {
    const formattedCNPJ = typeof cnpj === 'string' ? cnpj.toUpperCase() : cnpj;
    return validateCNPJ(formattedCNPJ);
  }

  public static isFormattedCNPJ(cnpj: unknown): boolean {
    const formattedCNPJ = typeof cnpj === 'string' ? cnpj.toUpperCase() : cnpj;
    return CNPJformat(formattedCNPJ);
  }
}