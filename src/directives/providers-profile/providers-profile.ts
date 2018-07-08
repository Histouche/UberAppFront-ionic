import { Directive } from '@angular/core';

/**
 * Generated class for the ProvidersProfileDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[providers-profile]' // Attribute selector
})
export class ProvidersProfileDirective {

  constructor() {
    console.log('Hello ProvidersProfileDirective Directive');
  }

}
