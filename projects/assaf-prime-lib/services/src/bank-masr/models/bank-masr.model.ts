import { BankMasrCheckoutConfigAgreement } from './agreement';
import { BankMasrCheckoutConfigAuthentication } from './authentication';
import { BankMasrCheckoutConfigBilling } from './billing';
import { BankMasrCheckoutConfigConstraints } from './constraints';
import { BankMasrCheckoutConfigContact } from './customer';
import { BankMasrCheckoutConfigDevice } from './device';
import { BankMasrCheckoutConfigInteraction } from './interaction';
import { BankMasrCheckoutConfigOrder } from './order';
import { BankMasrCheckoutConfigShipping } from './shipping';
import { BankMasrCheckoutConfigTransaction } from './transaction';

export interface BankMasrCheckoutConfig {
  session: {
    /**
     * Identifier of the payment session containing values for any of the request fields to be used in this operation
     *
     * Values contained in the session will override values provided by the request.
     * @validation Data consists of ASCII characters, allowed length 31-35
     */
    id: string;
    /**
     * Use this field to implement optimistic locking of the session content.
     *
     * If session.version provided by you does not match that stored against the session, the gateway will reject the operation with error.cause=INVALID_REQUEST.
     * @validation Data consists of ASCII characters, allowed length 10
     */
    version?: string;
  };
  initiator?: {
    /**
     * The person who initiated this transaction.
     *
     * For Merchant Administration, the person is identified by their logon name.
     * @validation Data can consist of any characters, allowed length 1-256
     */
    userId?: string;
  };
  /**
   * If, when integrating with the gateway, you are using a solution (e.g. a shopping cart or e-commerce solution) provided, supported or certified by your payment service provider, enter the solution ID issued by your payment service provider here
   */
  partnerSolutionId?: string;
  /**
   * The unique identifier issued to you by your payment provider.
   * @validation Data may consist of the characters 0-9, a-z, A-Z, '-', '_', allowed length 1-40
   */
  merchant?: string;
  /**
   * The person who initiated this transaction.
   *
   * For Merchant Administration, the person is identified by their logon name.
   * @validation Data can consist of any characters, allowed length 1-256
   */
  userId?: string;
  /**
   * A series of related orders that execute one commercial agreement.
   *
   * For example, linking the orders for a series of recurring payments (a mobile phone subscription), split tenders (one payment using two cards), or when the merchant offers to take payments by a series of installments (hire purchase).
   *
   * You must provide this data for some types of payments (such as recurring), but you can provide it for any cases where you want to link orders together.
   */
  agreement?: BankMasrCheckoutConfigAgreement;
  /**
   * Information about how the payer's identity is verified
   *
   * For example, using 3-D Secure authentication.
   *
   * This parameter group include payer authentication options available to you, parameters you need to perform payer authentication for an available method, and the results of payer authentication.
   */
  authentication?: BankMasrCheckoutConfigAuthentication;
  /**
   * Details of the payer's billing address.
   */
  billing?: BankMasrCheckoutConfigBilling;
  /**
   * Information about any constraints that apply to this transaction.
   *
   * Specify constraints to ensure that the transaction conforms to predefined criteria. This is useful if your integration does not directly collect all the transaction values (e.g. a session-based integration or a checkout integration).
   */
  constraints?: BankMasrCheckoutConfigConstraints;
  /**
   * Information about the customer, including their contact details.
   */
  customer?: BankMasrCheckoutConfigContact;
  /**
   * Information that controls the payer's checkout interaction.
   */
  interaction?: BankMasrCheckoutConfigInteraction;
  /**
   * Information about the device used by the payer for this transaction.
   */
  device?: BankMasrCheckoutConfigDevice;
  /**
   * Shipping information for this order.
   */
  shipping?: BankMasrCheckoutConfigShipping;
  /**
   * Information about the order associated with this transaction.
   */
  order?: BankMasrCheckoutConfigOrder;
  /**
   * Information about this transaction.
   */
  transaction?: BankMasrCheckoutConfigTransaction;
}
