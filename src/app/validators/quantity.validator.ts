import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable()
export class QuantityValidator {
  constructor() {
  }
}

export function minimumQuantityValidator(quantity: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log("TRAZA", quantity, control.value);
    const minimum = quantity >= Number(control.value) && Number(control.value) > 0;
    return minimum ? null : { 'minimum': true };
  };
}
