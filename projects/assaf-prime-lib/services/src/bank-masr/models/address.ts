export interface BankMasrConfigAddress {
  /**
   * The city portion of the address.
   * @validation Data can consist of any characters, allowed length 1-100
   */
  city?: string;
  /**
   * The name of the company associated with this address.
   * @validation Data can consist of any characters, allowed length 1-100
   */
  company?: string;
  /**
   * The 3 letter ISO standard alpha country code of the address.
   * @validation Data must consist of the characters A-Z, allowed length 3
   */
  country?: string;
  /**
   * The post code or zip code of the address.
   * @validation Data may consist of the characters 0-9, a-z, A-Z, ' ', '-', allowed length 1-10
   */
  postcodeZip?: string;
  /**
   * The state or province of the address
   * @validation Data can consist of any characters, allowed length 1-20
   */
  stateProvince?: string;
  /**
   * The three character ISO 3166-2 country subdivision code for the state or province of the address.
   *
   * Providing this field might improve your payer experience for 3-D Secure payer authentication.
   * @validation Data can consist of any characters, allowed length 1-3
   */
  stateProvinceCode?: string;
  /**
   * The first line of the address.
   *
   * For example, this may be the street name and number, or the Post Office Box details.
   * @validation Data can consist of any characters, allowed length 1-100
   */
  street?: string;
  /**
   * The second line of the address (if provided).
   * @validation Data can consist of any characters, allowed length 1-100
   */
  street2?: string;
}
