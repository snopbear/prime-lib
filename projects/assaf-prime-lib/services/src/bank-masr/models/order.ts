export interface BankMasrCheckoutConfigOrder {
  /**
   * A unique identifier for this order to distinguish it from any other order you create.
   */
  id?: string;
  /**
   * The total amount for the order. This is the net amount plus any surcharge.
   *
   * If you provide any sub-total amounts, then the sum of these amounts (order.itemAmount, order.taxAmount, order.shippingAndHandlingAmount, order.cashbackAmount, order.gratuityAmount), minus the order.discountAmount must equal the net amount.
   */
  amount?: number;
  /**
   * Set this flag if the transaction is a manual cash disbursement transaction, i.e. cash is disbursed upon the acceptance of a card by a financial institution teller.
   */
  cashAdvance?: boolean;
  /**
   * Indicates if you expect to capture the full order amount for which you are requesting authorization.
   */
  certainty?: 'ESTIMATED' | 'FINAL';
  /**
   * The currency of the order expressed as an ISO 4217 alpha code, e.g. USD.
   */
  currency?: string;
  /**
   * Information about this order that is of interest to you.
   *
   * For example order.custom.X, where 'X' is defined by you and must be less than 100 characters from the set A-Z, a-z, 0-9. For example, order.custom.salesRegion. You can specify up to 50 such fields. They are not sent to acquirers.
   */
  custom?: string;
  /**
   * A note from the payer about this order.
   */
  customerNote?: string;
  /**
   * The date the payer placed the order.
   *
   * Data must comply with ISO 8601 extended date format, yyyy-mm-dd.
   */
  customerOrderDate?: string;
  /**
   * The payer's own reference for the order
   *
   * This reference may assist the payer to identify the order in their system. For example, a purchase order number, project identifier, or cost center.
   */
  customerReference?: string;
  /**
   * Short textual description of the contents of the order
   */
  description?: string;
  /**
   * The invoice number you issued for this order.
   */
  invoiceNumber?: string;
  /**
   * A 4-digit code used to classify your business by the type of goods or services it offers.This is also known as the Merchant Category Code (MCC).
   *
   * You only need to provide the MCC if you want to override the default value configured for your acquirer link.The value you provide must match one of those configured by your payment service provider.
   */
  merchantCategoryCode?: number;
  /**
   * The amount payable for the order before surcharging is applied
   *
   * If you specify a net amount the gateway will calculate the surcharge for you.
   */
  netAmount?: number;
  /**
   * Your identifier for the part of your organization that is responsible for the order.
   *
   * You might provide this data when you want to track the accountability for the order. For example, store number, sales region, branch, or profit center
   */
  owningEntity?: string;
  /**
   * Indicates the purchase of specific types of goods or services that you are required to inform the issuer about when requesting authorization of a payment.
   */
  purchaseType?:
    | 'CRYPTOCURRENCY'
    | 'DEBT_REPAYMENT'
    | 'HIGH_RISK_SECURITIES'
    | 'OTHER';
  /**
   * The identifier of the order.
   *
   * For example, a shopping cart number, an order number, or an invoice number.
   */
  reference?: string;
  /**
   * The name of the person who requested the goods or services.
   */
  requestorName?: string;
  /**
   * The total shipping and handling amount for the order.
   */
  shippingAndHandlingAmount?: number;
  /**
   * The total tax amount for the order.
   *
   * If you do not provide this value but provide line item data, then this amount is calculated as the sum of the item.quantity times the item.unitTaxAmount for all the line items (total tax amount).
   *
   * If you provide both this value and line item data, then the order.taxAmount MUST equal the total tax amount.
   */
  taxAmount?: number;
  /**
   * Your tax registration identifier provided by the Federal/National tax authority (for example, federal tax identification number, ABN)
   *
   * If you are a Canadian merchant, use this field to provide your Tax Registration ID for paying Harmonized Sales Tax (HST) or Goods and Services Tax (GST) collected by the Canada Revenue Agency.
   */
  taxRegistrationId?: string;
  /**
   * Use this parameter group to provide a breakdown of tax types, amount per tax type, and rate per tax type included in order.taxAmount.
   */
  tax?: {
    /**
     * The tax amount included in this order for the tax type
     */
    amount?: number;
    /**
     * The type of tax included in the order amount.
     *
     * The correct value as used by your acquirer may have to be provided. Contact your payment service provider for details.
     */
    type?: string;
  };
  /**
   * Use this parameter group to provide additional information if you are a marketplace.You are considered a marketplace if you operate an electronic commerce website or mobile application that brings together payers and retailers and you are selling the goods or services on behalf of the retailer.In this case, the card schemes may require you to register with them as a marketplace and assign you a Marketplace ID.
   */
  marketplace?: {
    /**
     * Provide information about the location of the retailers for goods or services included in this order.Where a retailer is located in a country different from your country, they are considered a foreign retailer, otherwise they are considered a domestic retailer.
     */
    retailerLocation: 'DOMESTIC_ONLY' | 'FOREIGN_AND_DOMESTIC' | 'FOREIGN_ONLY';
  };
}
