import { AbstractControl } from '@angular/forms';


// custom validator to check that two fields match
export function YearRange(control: AbstractControl): { [key: string]: boolean } | null {
    let maxYear = 2019;
    let minYear = 1920;
    if (control.value > maxYear || control.value < minYear) {
        return { 'ageRange': true };
    } if (maxYear - control.value < 18) {
        return { 'adultRange': true };
    }
    return null;
}

