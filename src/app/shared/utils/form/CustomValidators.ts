import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { MathUtils } from "../MathUtils";

export class CustomValidators {
  static stringLength(length: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value) || isEmptyInputValue(length)) {
        return null;  // don't validate empty values to allow optional controls
      }
      const value = control.value.length;
      return !isNaN(value) && value !== length ? {'length': {'length': length, 'actual': value}} : null;
    };
  }

  static pivaFormat(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value) || isEmptyInputValue(length)) {
        return null;  // don't validate empty values to allow optional controls
      }

      const value = control.value;

      if (control.value.length !== 11) {
        return null;
      }

      // https://github.com/gchq/CyberChef/blob/6ed9d4554a2816c2c9c2e12b5e23f530b22ecf3d/src/core/operations/LuhnChecksum.mjs#L14
      // https://it.wikipedia.org/wiki/Partita_IVA#Struttura_del_codice_identificativo_di_partita_IVA
      const checksum = MathUtils.getLuhnChecksum(value.substring(0, value.length - 1) + "0");
      const controlDigit = parseInt(value.substring(value.length - 1), 10);

      if (checksum === null || controlDigit !== ((10 - checksum) % 10)) {
        return {
          regex: {
            suggestion: '86334519756'
          }
        }
      }

      return null;
    };
  }

  static cfFormat(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value) || isEmptyInputValue(length)) {
        return null;  // don't validate empty values to allow optional controls
      }

      if (!/^(?:[A-Z][AEIOU][AEIOUX]|[AEIOU]X{2}|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i.test(control.value)) {
        return {regex: {suggestion: 'RSSMRA80L05F593A'}};
      }

      return null;
    };
  }

  static emailFormat(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value) || isEmptyInputValue(length)) {
        return null;  // don't validate empty values to allow optional controls
      }

      if (!/(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(control.value)) {
        return {regex: {suggestion: 'mario.rossi@email.it'}};
      }

      return null;
    };
  }
}

const isEmptyInputValue = (value: any): boolean => {
  return value == null || ((typeof value === 'string' || Array.isArray(value)) && value.length === 0);
}
