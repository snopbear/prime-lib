import { BankMasrConfigAddress } from './address';
import { BankMasrCheckoutConfigContact } from './customer';

export interface BankMasrCheckoutConfigShipping {
  /**
   * The shipping method used for delivery of this order.
   */
  method?:
    | 'ELECTRONIC'
    | 'GROUND'
    | 'NOT_SHIPPED'
    | 'OVERNIGHT'
    | 'PICKUP'
    | 'PRIORITY'
    | 'SAME_DAY';
  /**
   * The address to which this order will be shipped.
   */
  address?:
    | {
        /**
         * Indicates whether the shipping address provided is the same as the payer's billing address.
         *
         * Provide this value if you are not providing the full shipping and billing addresses, but you can affirm that they are the same or different.
         */
        sameAsBilling: 'DIFFERENT' | 'SAME' | 'UNKNOWN';
      }
    | ShippingAddress;
  /**
   * Details of the contact person at the address the goods will be shipped to.
   */
  contact?: BankMasrCheckoutConfigContact;
}

interface ShippingAddress extends BankMasrConfigAddress {
  source?: 'ADDRESS_ON_FILE' | 'NEW_ADDRESS';
}
