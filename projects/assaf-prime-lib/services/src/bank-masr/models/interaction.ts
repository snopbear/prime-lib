export interface BankMasrCheckoutConfigInteraction {
  /**
   * A language identifier or IETF language tag to control the language of the payment interaction with the payer (e.g. en_US, es, fr-CA).
   *
   * By default, the language is determined from the payer's browser. Supply a value for this field only if you wish to override the default behavior. If the language you specify is not supported by the gateway, the payment is displayed in the best matching language.
   * @validation Data must be a language identifier or IETF language tag, allowed length 2-5
   */
  locale?: string;
  /**
   * Indicates the operation that you wish to perform during the Hosted Checkout interaction.
   */
  operation?: 'AUTHORIZE' | 'NONE' | 'PURCHASE' | 'VERIFY';
  /**
   * The URL to which you want to return the payer if the payment is not completed in the allowed time.
   */
  timeoutUrl?: string;
  /**
   * The theme used to control the look and feel of your checkout interaction.
   *
   * If you do not provide this field the default theme is will be used.
   * @validation Data may consist of the characters 0-9, a-z, A-Z, '-', '_', allowed length 1-50
   */
  theme?: string;
  /**
   * The ISO 3166 alpha-3 country code of the payer's country, to be used to present country-specific content to the payer during the interaction.
   *
   * For a Secure Remote Commerce interaction, the payer's country is used to present country-specific content such as Terms and Conditions and you only need to provide it, if you wish to override the default payer country you have configured for Secure Remove Commerce interactions.
   * @validation Data must consist of the characters A-Z, allowed length 3
   */
  country?: string;
  googleAnalytics?: {
    /**
     * The property ID for your shop site provided by Google Analytics in the form UA-XXXXX-Y.
     *
     * Provide this ID if you want to track interactions with the checkout using Google Analytics. See www.google.com/analytics.
     * @validation Data can consist of any characters, allowed length 1-20
     */
    propertyId: string;
  };
  /**
   * A group of objects that control the visibility of, and payer-interaction with, displayed information.
   */
  displayControl?: {
    /**
     * Indicates if you require the payer to provide their billing address during the payment interaction.
     */
    billingAddress?: 'HIDE' | 'MANDATORY' | 'OPTIONAL' | 'READ_ONLY';
    /**
     * Indicates if you wish to display a 'Confirm Account Number' field for the ACH Account Number entry.
     */
    confirmAchAccountNumber?: 'HIDE' | 'SHOW';
    /**
     * Indicates if you require the payer to provide their email address on the payment interaction
     */
    customerEmail?: 'HIDE' | 'MANDATORY' | 'OPTIONAL' | 'READ_ONLY';
    /**
     * Indicates if you wish to display a summary of the order before the payer submits their payment.
     */
    orderSummary?: 'HIDE' | 'SHOW' | 'SHOW_PARTIAL';
    /**
     * Indicates if you want the payer to confirm the payment details before they submit the payment
     */
    paymentConfirmation?: 'HIDE' | 'SHOW';
    /**
     * Indicates whether you wish to hide payment terms for a payment plan during the payment interaction.
     */
    paymentTerms?: 'HIDE' | 'SHOW_IF_SUPPORTED';
    /**
     * Indicates if you wish to hide the shipping details on the payment interaction.
     */
    shipping?: 'HIDE' | 'READ_ONLY';
  };
  /**
   * Information that allows you to display your brand and business details during the payment interaction.
   */
  merchant?: {
    /**
     * The name of your business for display to the payer on the payment interaction
     */
    name?: string;
    /**
     * The email address of your business for display to the payer during the payment interaction (e.g. an email address for customer service).
     */
    email?: string;
    /**
     * The name of your business for display to the payer on the payment interaction.
     */
    logo?: string;
    /**
     * The phone number of your business for display to the payer during the payment interaction.
     */
    phone?: string;
    /**
     * The URL of your business for display to the payer during the payment interaction.
     */
    url?: string;
    /**
     * Information on your business address.
     */
    address?: {
      /**
       * The first line of your business address for display to the payer during the payment interaction.
       */
      line1?: string;
      /**
       * The second line of your business address for display to the payer during the payment interaction.
       */
      line2?: string;
      /**
       * The third line of your business address for display to the payer during the payment interaction.
       */
      line3?: string;
      /**
       * The fourth line of your business address for display to the payer during the payment interaction.
       */
      line4?: string;
    };
  };
}
