import { AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';



export class OldPasswordMatchValidation {
    static validate(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            if (control.value === '1234') {
                return resolve({ isalreadyTaken: true });
            }
            else {
                return resolve({ isalreadyTaken: false });
            }
            return null;


        });

    }
}