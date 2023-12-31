export interface BankMasrCheckoutConfigDevice {
  /**
   * The telephone number captured by ANI (Automatic Number Identification) when the customer calls to place the order.
   * @validation Data can consist of any characters, allowed length 1-10
   */
  ani?: string;
  /**
   * The 2 digit ANI information identifier provided by the telephone company to indicate the call type, for example, cellular (61-63), toll free (24,25), etc
   * @validation Data can consist of any characters, allowed length 1-2
   */
  aniCallType?: string;
  /**
   * The mobile phone manufacturer's identifier for the model of the mobile device used to initiate the payment
   * @validation Data can consist of any characters, allowed length 1-255
   */
  mobilePhoneModel?: string;
}
