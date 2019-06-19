import { AbstractControl } from '@angular/forms';

export function passwordValidation(control: AbstractControl): { [key: string]: boolean } | null {
    const regexp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
    if (!regexp.test(control.value)) {
        return { 'passwordValidation': true };
    }
    return null;
}
