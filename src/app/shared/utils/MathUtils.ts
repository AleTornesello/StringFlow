export class MathUtils {
  public static getLuhnChecksum(inputStr: string): number | null {
    // https://github.com/gchq/CyberChef/blob/6ed9d4554a2816c2c9c2e12b5e23f530b22ecf3d/src/core/operations/LuhnChecksum.mjs#L14
    // https://it.wikipedia.org/wiki/Partita_IVA#Struttura_del_codice_identificativo_di_partita_IVA
    let even = false;
    return inputStr.split("").reverse().reduce((acc: number, elem: string) => {
      // Convert element to integer.
      let temp = parseInt(elem, 10);

      // If element is not an integer.
      if (isNaN(temp))
        throw new Error("Character: " + elem + " is not a digit.");

      // If element is in an even position
      if (even) {
        // Double the element and add the quotient and remainder together.
        temp = 2 * temp;
        temp = Math.floor(temp / 10) + (temp % 10);
      }

      even = !even;
      return acc + temp;
    }, 0) % 10;
  }

  public static isNullEmptyOrUndefined(val: any) {
    return val === null || val === '' || val === undefined;
  }
}
