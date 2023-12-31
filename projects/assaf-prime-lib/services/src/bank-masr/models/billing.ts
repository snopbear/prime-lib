import { BankMasrConfigAddress } from './address';

export interface BankMasrCheckoutConfigBilling {
  /**
   * The payer's billing address.
   *
   * This data may be used to qualify for better interchange rates on corporate purchase card transactions.
   */
  address: BankMasrConfigAddress;
}
