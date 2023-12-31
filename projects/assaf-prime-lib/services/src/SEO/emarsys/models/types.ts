import { CartItem, Descriptor } from './interfaces';

export declare type EmarsysCommand =
  | EmarsysCartCommand
  | EmarsysAvailabilityZoneCommand
  | EmarsysCategoryCommand
  | EmarsysDisplayCurrencyCommand
  | EmarsysLanguageCommand
  | EmarsysPurchaseCommand
  | EmarsysSearchTermCommand
  | EmarsysSetCustomerIdCommand
  | EmarsysSetEmailCommand
  | EmarsysTestModeCommand
  | EmarsysViewCommand
  | EmarsysIncludeCommand
  | EmarsysExcludeCommand;

/**
 * Reports the list of items in the visitor’s shopping cart.
 * @placement Issue this command on every page, even if the customer’s cart is empty.
 * @note You must reissue the cart and go commands each time the customer makes an update to the cart.
 * @see https://dev.emarsys.com/docs/web-extend/469506ac08e6a-cart-web-extend-command
 */
declare type EmarsysCartCommand = [event: 'cart', value: CartItem[]];
/**
 * Sets the availability zone. Used in conjunction with the recommend command for websites which support localization.
 * @placement Use this command on pages that request product recommendations using recommend (Predict Command), if your site has multiple availability zones.
 * @see https://dev.emarsys.com/docs/web-extend/ZG9jOjMwOTYzMDE2-availability-zone-predict-command
 */
declare type EmarsysAvailabilityZoneCommand = [
  event: 'availabilityZone',
  value: string
];
/**
 * Reports the category currently browsed by the visitor.
 * @placement Issue this command on category pages only.
 * @note If you are using Predict services on a localized website, you still need to push the default category field value with this command.
 * @see https://dev.emarsys.com/docs/web-extend/b8793951aefc0-category-web-extend-command
 */
declare type EmarsysCategoryCommand = [event: 'category', category: string];
/**
 * Sets the display currency.
 * @placement Issue this command on all pages of a website where the default currency needs to be overriden.
 * @see https://dev.emarsys.com/docs/web-extend/ZG9jOjMwOTYzMDE0-display-currency-discovery-command
 */
declare type EmarsysDisplayCurrencyCommand = [
  event: 'displayCurrency',
  currencyCode: string
];
/**
 * Sets the display language for Predict web recommender widgets, such as HOME and DEPARTMENT.
 * @placement Issue this command on all relevant pages of a localized website.
 * @see https://dev.emarsys.com/docs/web-extend/ZG9jOjMwOTYzMDEw-language-predict-and-discovery-command
 */
declare type EmarsysLanguageCommand = [event: 'language', langCode: string];
/**
 * Reports a purchase event.
 * @placement Issue this command on the checkout confirmation page.
 * @note This command should be only issued once for a given purchase. Emarsys does not check the submitted purchases for duplication.
 * @see https://dev.emarsys.com/docs/web-extend/23905885d31e4-purchase-web-extend-command
 */
declare type EmarsysPurchaseCommand = [
  event: 'purchase',
  descriptor: Descriptor
];
/**
 * Reports search terms entered by the visitor.
 * @placement Issue this command on the search results page.
 * @see https://dev.emarsys.com/docs/web-extend/ZG9jOjMwOTYzMDA2-search-term
 */
declare type EmarsysSearchTermCommand = [event: 'searchTerm', term: string];
/**
 * Reports your inhouse customer identifier for known visitors (logged in).
 * @placement Issue this command (or the setEmail) on every page in the go command batch if the current visitor is identified.
 * @note The setEmail command is the default identification option, to which setCustomerId is an alternative. Do not mix usage of these two commands!
 * @see https://dev.emarsys.com/docs/web-extend/f9c798fefc14f-set-customer-id
 */
declare type EmarsysSetCustomerIdCommand = [
  event: 'setCustomerId',
  customerId: string
];
/**
 * Reports the email address of known visitors. Known visitors incude users who are logged in, but also any interaction point where the email address is entered by visitor and recorded into Emarsys contact database, such as newsletter subscriptions, guest purchases.
 * @placement Issue this (or the setCustomerId) command on every page in the go command batch if the visitor is logged in or identified.
 * @note This command is the default identification option, to which setCustomerId is an alternative. Do not mix usage of these two commands!
 * @see https://dev.emarsys.com/docs/web-extend/31b449db6e0f3-set-email
 */
declare type EmarsysSetEmailCommand = [event: 'setEmail', email: string];
/**
 * Disables logging for all commands contained in the current ScarabQueue object. In effect, this will prevent data-collection events from being recorded.
 * @placement Use testMode command on your staging/test site to avoid test traffic from interfering with your live website data-collection (for example to prevent purchases on the test site from showing up in Site Traffic statistics).
 * @note testMode also prevents the Live Events tool from working. The Inspector tool will still work, you can use it for checking your JavaScript integration.
 * @see https://dev.emarsys.com/docs/web-extend/f47ca4380f2d3-test-mode
 */
declare type EmarsysTestModeCommand = ['testMode'];
/**
 * Reports a product view.
 * @placement Issue this command on product pages.
 * @see https://dev.emarsys.com/docs/web-extend/4c17683547049-view-web-extend-command
 */
declare type EmarsysViewCommand = [event: 'view', itemId: string];
/**
 * Adds an inclusion criterion for recommended items; more than one criteria can be specified by multiple include commands. An item is recommended only if it satisfies all criteria. Always used in conjunction with recommend (Predict Command).
 * @placement Issue this command on pages where you use recommend (Predict Command).
 * @note The comparison only applies to the entire field value and is case sensitive. For example, if you want to exclude the field value 24/7™ Lace Full Coverage Bra, you must provide the whole field value exactly as it is spelled, no other strings (such as 24/7™ Lace or24/7™ lace full coverage bra) will produce a match.
 * @see https://dev.emarsys.com/docs/web-extend/37509b8f49649-include-predict-command
 */
declare type EmarsysIncludeCommand = [
  event: 'include',
  field: string,
  comparison: 'is' | 'in' | 'has' | 'overlaps',
  expectation: string | Array<string>
];
/**
 * Defines an exclusion criterion for recommended items; more than one criteria can be specified by multiple exclude commands. An item will not be recommended if it satisfies all exclusion criteria. Always use it in conjunction with recommend (Predict Command).
 * @placement Issue this command on pages where you use recommend (Predict Command).
 * @note The comparison only applies to the entire field value and is case sensitive. For example, if you want to exclude the field value 24/7™ Lace Full Coverage Bra, you must provide the whole field value exactly as it is spelled, no other strings (such as 24/7™ Lace or24/7™ lace full coverage bra) will produce a match.
 * @see https://dev.emarsys.com/docs/web-extend/eb1e82055cbbf-exclude-predict-command
 */
declare type EmarsysExcludeCommand = [
  event: 'exclude',
  field: string,
  comparison: 'is' | 'in' | 'has' | 'overlaps',
  expectation: string | Array<string>
];
