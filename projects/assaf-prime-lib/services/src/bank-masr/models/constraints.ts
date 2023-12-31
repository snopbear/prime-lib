export interface BankMasrCheckoutConfigConstraints {
  /**
   * Information about the payment plan constraints which apply for this transaction.
   *
   * Specify payment plan constraints to restrict the available payment plan options for this transaction.
   */
  paymentPlans: {
    /**
     * The allowable number of deferral months for the payment plan.
     * @validation A number comprising the digits 0-9, having at least one digit, allowed length 1-99
     */
    numberOfDeferrals?: number;
    /**
     * The allowable number of installments for the payment plan
     * @validation A number comprising the digits 0-9, having at least one digit, allowed length 1-99
     */
    numberOfPayments?: number;
    /**
     * The identifiers for the payment plans supported for this transaction.
     *
     * If you wish to offer any payment plans to the payer, provide the plan identifiers in this field else pass it as empty.
     * @validation Data can consist of any characters, allowed length 1-40
     */
    supported?: string;
  };
}
