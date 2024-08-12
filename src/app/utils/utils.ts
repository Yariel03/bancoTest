export class Utils {
  static CapitalLeters(nameLogo: string): string {
    return nameLogo
      .split('-')
      .map(
        (palabra) =>
          palabra.charAt(0).toUpperCase() + palabra.charAt(0).slice(1)
      )
      .join('');
  }

  static formatDateToYYYYMMDD(date: any): string {
    if (!(date instanceof Date)) {
      throw new Error('El parámetro debe ser una instancia de Date.');
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son 0-indexados
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
