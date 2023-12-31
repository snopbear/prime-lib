export interface BankMasrCheckoutConfigContact {
  /**
   * The email address of the customer.
   */
  email?: string;
  /**
   * The payer's first name.
   */
  firstName?: string;
  /**
   * The payer's last or surname.
   */
  lastName?: string;
  /**
   * The payer's mobile phone or cell phone number in ITU-T E123 format, for example +1 607 1234 5678
   * @validation Data consists of '+', country code (1, 2 or 3 digits), 'space', and national number (which may embed single space characters for readability), mandatory country code: true, maximum total digits: 15
   */
  mobilePhone?: string;
  /**
   * The payer's phone number in ITU-T E123 format, for example +1 607 1234 456
   * @validation Data consists of '+', country code (1, 2 or 3 digits), 'space', and national number (which may embed single space characters for readability), mandatory country code: true, maximum total digits: 15
   */
  phone?: string;
}
