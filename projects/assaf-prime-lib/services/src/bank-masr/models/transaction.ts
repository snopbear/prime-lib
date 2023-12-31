export interface BankMasrCheckoutConfigTransaction {
  /**
   * Indicates that you were not able to submit the Authorization (or Payment) transaction at the time it was completed with the cardholder due to a connectivity, system issue, or other limitations and have deferred submitting it until your system was back online.
   */
  deferredAuthorization?: boolean;
  /**
   * Your note about this transaction.
   */
  merchantNote?: string;
  /**
   * An optional identifier for this transaction.
   */
  reference?: string;
  /**
   * Additional information to be passed to acquirer.
   */
  acquirer?: {
    /**
     * Additional information requested by the acquirer which cannot be passed using other available data fields.
     *
     * This field must not contain sensitive data.
     */
    customData?: string;
    /**
     * The unique identifier that allows the issuer to link related transactions.
     *
     * For example, linking a Refund to an Authorization or linking merchant-initiated payments in a series. For a subsequent Refund the gateway automatically submits the Trace ID of the Authorization to the acquirer (where supported). However, you must provide this field for a standalone Refund. For merchant-initiated payments in a series the gateway automatically submits the correct Trace ID to the acquirer (where supported). However, you must provide this field, if you are submitting any of the payments in the series to the acquirer without using the gateway. In this case you must follow the instructions in the Visa documentation for the 'transaction identifier' or the Mastercard documentation for the 'trace identifier' field. If you provide the Trace ID for a payment in a series of merchant-initiated payments, the gateway will use this value in preference to the gateway's selected value.
     */
    traceId?: string;
    /**
     * This is the value provided to the acquirer to identify the order.
     *
     * Ideally this will be the order.id, however if that value cannot be used directly, it will be transformed by the gateway to a unique value that the acquirer will accept. If that behavior is not suitable, you can directly provide the value in this field and it will be passed to the acquirer. You then take responsibility for its correctness. (Note: contact your payment provider to see if this is supported for your acquirer).
     */
    transactionId?: string;
  };
}
