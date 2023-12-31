export interface BankMasrCheckoutConfigAgreement {
  /**
   * Date at which your agreement with the payer to process payments expires
   * @validation Data must comply with ISO 8601 extended date format, yyyy-mm-dd
   */
  expiryDate?: string;
  /**
   * Your identifier for the agreement you have with the payer to process payments.
   * @validation Data can consist of any characters min: 1, max: 100
   */
  id?: string;
  /**
   * The type of commercial agreement that the payer has with you
   *
   * Specify the agreement type when you have provided a value for agreement.id and this payment is the first in a series of payments. The default value is OTHER.
   *
   * The gateway will use the value you specify for subsequent payments in the series.
   */
  type?: 'INSTALLMENT' | 'OTHER' | 'RECURRING' | 'UNSCHEDULED';
  /**
   * Information about agreements for recurring payments.
   */
  recurring?: {
    /**
     * Indicates if all the payments within the agreement use the same amount or if the amount differs between the payments.
     */
    amountVariability?: 'FIXED' | 'VARIABLE';
    /**
     * The minimum number of days between payments agreed with the payer under your agreement with them.
     * @validation min: 1, max: 999
     */
    daysBetweenPayments?: number;
    /**
     * The number of merchant-initiated payments within the recurring payment agreement.
     * @validation min: 1, max: 9999
     */
    numberOfPayments?: number;
  };
}
