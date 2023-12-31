import { Injectable } from '@angular/core';
import { BankMasrCheckoutConfig } from './models/bank-masr.model';

declare let Checkout: any;

@Injectable({
  providedIn: 'root',
})
export class BankMasrService {
  //#region Declerations
  private __scriptUrl!: string;
  private __loaded: boolean = false;
  //#endregion Declerations

  //#region Methods
  // Adds a script with required callbacks
  private addCallbacks(): void {
    const callbacks = document.createElement('script');
    callbacks.id = 'bank-masr-callbacks';
    callbacks.defer = true;
    callbacks.innerHTML = `function errorCallback(error){console.log(error);};function completeCallback(resultIndicator,sessionVersion){console.log(resultIndicator,sessionVersion);};function cancelCallback(){console.log("payment cancelled");};function timeoutCallback(){console.log("payment timeout");}`;
    document.body.appendChild(callbacks);
  }
  // Checks if the provided option is available
  private validateOption(option: any): void {
    if (!option) {
      throw new Error(
        'Checkout option is not supported in current script version provided'
      );
    }
  }
  // Clears HostedCheckout keys from session storage
  private clearStorageItems(): void {
    sessionStorage.removeItem('HostedCheckout_sessionId');
    sessionStorage.removeItem('HostedCheckout_merchantState');
    sessionStorage.removeItem('HostedCheckout_embedContainer');
  }
  /**
   * Adds script tag to body for bank masr payment
   * @param scriptUrl URL for script to be loaded
   * @param isAsync Indicates wether the script should be async or not
   * @param onload callback to be applied on script load
   * @see https://banquemisr.gateway.mastercard.com/api/documentation/integrationGuidelines/hostedCheckout/integrationModelHostedCheckout.html
   * @see https://banquemisr.gateway.mastercard.com/api/documentation/apiDocumentation/checkout/index.html?locale=en_US
   */
  addBankMasrScript(
    scriptUrl: string,
    isAsync: boolean = true,
    onload?: (element?: HTMLScriptElement) => void
  ): void {
    if (!document.getElementById('bank-masr-script')) {
      const script = document.createElement('script');
      script.async = isAsync;
      script.src = scriptUrl;
      script.id = 'bank-masr-script';
      script.dataset['error'] = 'errorCallback';
      script.dataset['cancel'] = 'cancelCallback';
      script.dataset['complete'] = 'completeCallback';
      script.dataset['timeout'] = 'timeoutCallback';
      script.onload = (): void => {
        this.__loaded = true;
        this.__scriptUrl = scriptUrl;
        onload && onload(script);
      };
      document.body.appendChild(script);
      this.addCallbacks();
    }
  }
  /**
   * Initiate a payment in a lightbox on top of your merchant page.
   * @param bankCheckout The configuration object describes the merchant, customer, payment, and checkout appearance and behaviour. Fields in the object can contain literal values or a function that returns the value. Functions will be invoked before showing the payment interface.
   * @see https://banquemisr.gateway.mastercard.com/api/documentation/apiDocumentation/checkout/version/60/function/configure.html?locale=en_US
   */
  openBankPopup(bankCheckout: BankMasrCheckoutConfig): void {
    if (this.__loaded) {
      this.validateOption(Checkout?.showLightbox);
      this.clearStorageItems();
      Checkout.configure(bankCheckout);
      Checkout?.showLightbox();
    } else {
      this.addBankMasrScript(this.__scriptUrl);
    }
  }
  /**
   * Initiate a payment in an embedded view on your merchant page
   * @param elementId The ID of the div where the embedded content should be injected.
   * @param bankCheckout The configuration object describes the merchant, customer, payment, and checkout appearance and behaviour. Fields in the object can contain literal values or a function that returns the value. Functions will be invoked before showing the payment interface.
   * @see https://banquemisr.gateway.mastercard.com/api/documentation/apiDocumentation/checkout/version/60/function/configure.html?locale=en_US
   */
  showBankEmbeddedPage(
    elementId: string,
    bankCheckout: BankMasrCheckoutConfig
  ): void {
    if (this.__loaded) {
      this.validateOption(Checkout?.showEmbeddedPage);
      this.clearStorageItems();
      Checkout.configure(bankCheckout);
      Checkout?.showEmbeddedPage(elementId);
    } else {
      this.addBankMasrScript(this.__scriptUrl);
    }
  }
  /**
   * Initiate a payment by redirecting the payer's browser to a hosted payment page
   * @param bankCheckout
   */
  openPaymentPage(bankCheckout: BankMasrCheckoutConfig): void {
    if (this.__loaded) {
      this.validateOption(Checkout?.showPaymentPage);
      this.clearStorageItems();
      Checkout.configure(bankCheckout);
      Checkout?.showPaymentPage();
    } else {
      this.addBankMasrScript(this.__scriptUrl);
    }
  }
  //#endregion Methods
}
