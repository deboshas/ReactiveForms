import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';



export class PasswordMatchValidation {

    static match(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        console.log(newPassword);
        console.log(confirmPassword);

        if (newPassword.value === null || confirmPassword.value === null) {

            return null;

        }


        if (newPassword.value === confirmPassword.value) {

            return {
                passwordMatch: true
            };
        }
        else {

            return { passwordMatch: false };

        }

        return null;


    }




}